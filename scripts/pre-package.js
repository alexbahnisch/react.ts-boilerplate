"use strict";
const {copyFiles, readPackageJson, writePackageJson} = require("./common");


function copyPackageJson(sourceDir, destinationDir) {
  try {
    // noinspection JSCheckFunctionSignatures
    let rootPackageJson = readPackageJson(sourceDir);

    let {
      name, version, description, author, license, keywords, homepage, repository, bugs, dependencies, peerDependencies
    } = rootPackageJson;

    let subPackageJson = {
      name, version, description, author, license, keywords, homepage, repository, bugs, main: "./index.js", dependencies, peerDependencies
    };

    writePackageJson(destinationDir, subPackageJson);
    console.log(`Copied 'package.json' from '${sourceDir}' to '${destinationDir}'`)
  } catch (error) {
    console.warn(error.message)
  }
}

(function prePackage(sourceDir, destinationDir, ...files) {
  copyFiles(sourceDir, destinationDir, ...files);
  copyPackageJson(sourceDir, destinationDir)
})("../", "../build/package/", "LICENSE", "README.md");
