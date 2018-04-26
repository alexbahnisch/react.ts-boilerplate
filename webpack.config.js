"use strict";

function webpack(config) {
  return require(`./conf/webpack.${config}.js`)
}

module.exports = webpack(process.env.CONFIG);
