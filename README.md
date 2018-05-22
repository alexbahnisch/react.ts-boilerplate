# react.ts-boilerplate

A boilerplate for creating typescript/react based npm packages and webpack apps.

### Getting started

Requires node and npm to be installed.

```
npm install
```

## App

##### Local Builds

* Development build using live-server (content available at [http://localhost:8081](http://localhost:8081)):

    ```
    npm run app:build-dev
    ```
    
    and in a separate terminal
    
    ```
    npm run server
    ```

* Production build using live-server (content available at [http://localhost:8081](http://localhost:8081)):

    ```
    npm run app:build
    npm run app:server
    ```

* Development build using webpack-dev-server (content available at [http://localhost:8082](http://localhost:8082)):

    ```
    npm run app:serve
    ```

##### Docker Build

Requires docker, docker-compose and make.

* Development (content available at [http://localhost:8080](http://localhost:8080)):

    ```
    make serve
    npm run app:build-dev
    ```

* Production (content available at [http://localhost[:80]](http://localhost:80)):

    ```
    make build
    make run
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
