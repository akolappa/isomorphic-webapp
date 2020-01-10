const merge = require('webpack-merge');
const CommonConfig = require('./webpack.common');

module.exports = merge(CommonConfig, {
  mode: 'production',
});