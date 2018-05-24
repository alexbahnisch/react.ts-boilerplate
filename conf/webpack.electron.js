"use strict";
const fs = require('fs');
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


let externals = {};
fs.readdirSync(path.resolve(__dirname, "../node_modules"))
  .filter((module) => ([".bin"].indexOf(module) === -1))
  .forEach((module) => {externals[module] = "commonjs " + module});


module.exports = {
  mode: process.env.NODE_ENV !== "production" ? "production" : "development",
  target: "node",
  entry: {
    bundle: path.resolve(__dirname, "../src/app/main.tsx"),
    main: path.resolve(__dirname, "../src/electron/main.ts")
  },
  output: {
    path: path.resolve(__dirname, "../dist/electron/"),
    filename: "[name].js"
  },
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
  node: {
    __dirname: false,
  },
  externals: externals,
  plugins: [
    new CopyWebpackPlugin([
      {from: "./src/assets/css", to: "css"},
      {from: "./src/assets/fonts", to: "fonts"},
      {from: "./src/assets/img", to: "img"},
      {from: "./src/assets/js", to: "js"}
    ]),
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      excludeChunks: ["main"],
      template: "./src/assets/index.html"
    })
  ]
};
