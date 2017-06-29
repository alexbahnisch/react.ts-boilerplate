"use strict";

function webpack(config) {
  return require(`./webpack.${config}.js`)
}

module.exports = webpack(process.env.CONFIG);
