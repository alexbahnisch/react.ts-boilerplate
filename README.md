# react.ts-boilerplate

A boilerplate for creating typescript/react based npm packages and webpack apps.

### Getting started

```
npm install
```

### App

###### Development build

```
## Using the webpack-dev-server:
npm run app:server-dev

## Using http-server:
npm run app:build-dev
# and in a seperate console
npm run app:server
```

###### Production build

```
npm run app:build
```

### Package

```
npm run package
```
The created artifact will be at `./dist/artifacts/<package>-<version>.tgz`


### Clean

```
npm run clean
```
