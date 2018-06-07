"use strict";
const {readPackageJson, writePackageJson} = require("./common");


(function preElectron(sourceDir, destinationDir) {
  try {
    // noinspection JSCheckFunctionSignatures
    let rootPackageJson = readPackageJson(sourceDir);

    let {
      name, version, description, author, license, keywords, homepage, repository, bugs, dependencies
    } = rootPackageJson;

    let subPackageJson = {
      name, version, description, author, license, keywords, homepage, repository, bugs, main: "./main.js", dependencies
    };

    writePackageJson(destinationDir, subPackageJson);
    console.log(`Copied 'package.json' from '${sourceDir}' to '${destinationDir}'`)
  } catch (error) {
    console.warn(error.message)
  }
})("../", "../build/electron/", "LICENSE");
