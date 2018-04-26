"use strict";
const fs = require("fs");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");


// noinspection JSCheckFunctionSignatures
let packageJson = JSON.parse(fs.readFileSync("./package.json"));
let name = `${packageJson.name}-${packageJson.version}${process.env.MIN ? ".min" : ""}`;
let plugins = [new ExtractTextPlugin(`${name}.css`)];

if (!process.env.MIN) {
  plugins.push(new ExtractTextPlugin("styles.css"));
}

module.exports = {
  mode: process.env.MIN ? "production" : "development",
  entry: path.resolve(__dirname, "../src/package/index.ts"),
  output: {
    path: path.resolve(__dirname, "../dist/package/"),
    filename: `zzz.js`
  },
  devtool: process.env.MIN ? "source-map" : undefined,
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("css-loader")
      }
    ]
  },
  plugins: plugins
};
