"use strict";
/** @namespace process.env.CONFIG */

function webpack(config) {
  return require(`./webpack.${config}.js`)
}

module.exports = webpack(process.env.CONFIG);
