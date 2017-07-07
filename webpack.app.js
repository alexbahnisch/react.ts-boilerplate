"use strict";

const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const LiveReloadPlugin = require("webpack-livereload-plugin");


module.exports = {
  entry: path.resolve(__dirname, "./src/app/main.tsx"),
  output: {
    path: path.resolve(__dirname, "./dist/app/"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./dist/app/"),
    port: 8001,
    publicPath: "/"
  },
  resolve: {
    alias: {
      "package": path.resolve(__dirname, "./src/package")
    },
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
    }),
    new LiveReloadPlugin()
  ]
};
