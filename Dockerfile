FROM node:10 as build

WORKDIR /build

COPY package.json /build/package.json
COPY package-lock.json /build/package-lock.json

RUN npm install

COPY tsconfig.json /build/tsconfig.json
COPY webpack.config.js /build/webpack.config.js
COPY conf /build/conf
COPY src /build/src

RUN npm run app:build


FROM nginx:1

ENV NGINX_HOST 0.0.0.0
ENV NGINX_PORT 80

WORKDIR /app

COPY --from=build /build/dist/app /app
COPY conf/.nginx /etc/nginx/nginx.conf

EXPOSE 80
