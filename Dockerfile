FROM node:8.10 as build

WORKDIR /build

RUN npm install --global npm

COPY . /build

RUN npm install
RUN npm run app:build-docker


FROM ubuntu:17.10 as security

WORKDIR /etc/nginx/ssl

RUN apt-get update
RUN apt-get install --yes openssl

COPY ./conf/rsa.cfg /etc/nginx/ssl/rsa.ini

RUN openssl req -config rsa.ini -days 365 -newkey rsa:2048 -nodes -x509 -keyout rsa.key -out rsa.crt


FROM nginx:1.13.9

ENV NGINX_HOST 0.0.0.0
ENV NGINX_PORT 80

WORKDIR /app

COPY --from=build /build/dist/app /app
COPY --from=security /etc/nginx/ssl /etc/nginx/ssl
COPY conf/nginx.https.conf /etc/nginx/nginx.conf

EXPOSE 80 443
