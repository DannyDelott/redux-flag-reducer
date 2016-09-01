const nodeExternals = require('webpack-node-externals');
const config = require('./webpack.config');

module.exports = Object.assign({}, config, { target: 'node', externals: [ nodeExternals() ] });
