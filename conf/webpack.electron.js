"use strict";
const fs = require('fs');
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


const externals = {};
const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const outputPath = path.resolve(__dirname, "../build/electron/");

fs.readdirSync(path.resolve(__dirname, "../node_modules"))
  .filter((module) => ([".bin"].indexOf(module) === -1))
  .forEach((module) => {externals[module] = "commonjs " + module});


const app = {
  mode,
  entry: path.resolve(__dirname, "../src/app/main.tsx"),
  output: {
    path: outputPath,
    filename: "bundle.js"
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
        loader: ExtractTextPlugin.extract("css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]")
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: "./src/assets/css", to: "css"},
      {from: "./src/assets/fonts", to: "fonts"},
      {from: "./src/assets/img", to: "img"},
      {from: "./src/assets/js", to: "js"}
    ]),
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      template: "./src/assets/index.html"
    })
  ]
};


const electron = {
  mode,
  target: "node",
  entry: path.resolve(__dirname, "../src/electron/main.ts"),
  output: {
    path: outputPath,
    filename: "main.js"
  },
  resolve: {
    extensions: [".ts"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "awesome-typescript-loader"
      }
    ]
  },
  node: {
    __dirname: false,
  },
  externals,
};


module.exports = [app, electron];
