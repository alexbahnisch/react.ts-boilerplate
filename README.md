# react.ts-boilerplate

A boilerplate for creating typescript/react based npm packages and webpack apps.

### Getting started

Requires node and npm to be installed, and added to system path.

```
npm install
```

## App

##### Local Build

* Development build using http-server (content available at http://localhost:8081):

    ```
    npm run app:build-dev
    ```
    
    Then in a separate terminal:
    
    ```
    npm run app:server
    ```

* Production build using http-server (content available at http://localhost:8081):

    ```
    npm run app:build
    npm run app:server
    ```

* Development build using webpack-dev-server (content available at http://localhost:8082):

    ```
    npm run app:server-dev
    ```

##### Docker Build

Requires docker.

* Development (content available at http://localhost:8080):

    ```
    docker-compose up -d
    npm run app:build-dev
    ```

* Production (content available at http://localhost[:80] or https://localhost[:443]):

    ```
    docker-compose -f docker-compose.build.yml up --build -d
    ```

## Package

To create a compiled npm package, run:

```
npm run package
```

The created artifact will be at `./dist/artifacts/<package>-<version>.tgz`

## Clean

Finally to clean auto-generated code, run:

```
npm run clean
```
