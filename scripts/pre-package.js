"use strict";

const fs = require("fs");
const path = require("path");


function copyFile(sourceDir, destinationDir, file) {
  try {
      fs.writeFileSync(relativePath(destinationDir, file), fs.readFileSync(relativePath(sourceDir, file)));
    console.log(`Copied '${file}' from '${sourceDir}' to '${destinationDir}'`)
  } catch (error) {
    console.warn(error.message)
  }
}

function copyFiles(sourceDir, destinationDir, ...files) {
  files.forEach((file) => {
    copyFile(sourceDir, destinationDir, file)
  });
}

function relativePath(relativeDir, file) {
  return path.resolve(__dirname, relativeDir, file)
}

function copyPackageJson(sourceDir, destinationDir) {
  try {
    let rootPackageJson = JSON.parse(fs.readFileSync(relativePath(sourceDir, "package.json")));

    let {
      name, version, description, author, license, keywords,
      homepage, repository, bugs, dependencies, peerDependencies
    } = rootPackageJson;

    let subPackageJson = {
      name, version, description, author, license, keywords,
      homepage, repository, bugs, main: "./index.js", dependencies, peerDependencies
    };

    fs.writeFileSync(relativePath(destinationDir, "package.json"), JSON.stringify(subPackageJson, null, " "));
    console.log(`Copied 'package.json' from '${sourceDir}' to '${destinationDir}'`)
  } catch (error) {
    console.warn(error.message)
  }
}

(function prePackage(sourceDir, destinationDir, ...files) {
  copyFiles(sourceDir, destinationDir, ...files);
  copyPackageJson(sourceDir, destinationDir)
})("../", "../dist/package/", 'LICENSE', 'README.md');
