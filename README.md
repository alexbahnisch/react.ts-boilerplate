# react.ts-boilerplate

A boilerplate for creating typescript/react based npm packages, electron apps and webpack web apps.

### Requirements

* Node, npm and rm for all builds (fow windows users rm is included with git if you choose to install optional unix tools).
* Docker, docker-compose and make for docker builds.

### Getting started

```
npm install
```

## App (Web)

### Development

#### Local

To build and deploy a local development build with source-maps and live reloading (content available at [http://localhost:8081](http://localhost:8081)), run:

```
npm run app:build-dev
```

and in a separate terminal run

```
npm run server
```

#### Docker

To build and deploy a docker development build with source-maps and live reloading (content available at [http://localhost:8080](http://localhost:8080)), run:

```
make serve
npm run app:build-dev
```


### Production

#### Local

To build and deploy a local production build (content available at [http://localhost:8081](http://localhost:8081)), run:

```
npm run app
```

#### Docker

To build and deploy a local production build (content available at [http://localhost[:80]](http://localhost:80)), run:

```
make build
make run
```

#### Clean

Clean all generate code from app builds with:

```
npm run app:clean
```

### Docker

To stop a running docker container, run:

```
make stop
```

And to remove the docker container, run:

```
make clean
```


## Electron

### Distribution

To create a electron app from the web app source, run:

```
npm run electron
```

The created distribution will be at `./dist/electron/<package>-<platform>-<arch>.tgz`

### Clean

Clean all generate code from electron builds with:

```
npm run electron:clean
```


## Package

### Distribution

To create a compiled npm package, run:

```
npm run package
```

The created artifact will be at `./dist/artifacts/<package>-<version>.tgz`

### Clean

Clean all generate code from package builds with:

```
npm run package:clean
```


## Clean

Finally to clean all generated code, run:

```
npm run clean
```
