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


function readPackageJson(dir = ".") {
  // noinspection JSCheckFunctionSignatures
  return JSON.parse(fs.readFileSync(relativePath(dir, "package.json")));
}


function relativePath(relativeDir, file) {
  return path.resolve(__dirname, relativeDir, file)
}


function writePackageJson(dir, json) {
  fs.writeFileSync(relativePath(dir, "package.json"), JSON.stringify(json, null, " "));
}


module.exports = {
  copyFiles,
  readPackageJson,
  writePackageJson
};
