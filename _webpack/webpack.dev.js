const merge = require('webpack-merge');
const CommonConfig = require('./webpack.common');
const path = require('path');

module.exports = merge(CommonConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../_dist'),
    compress: true,
    port: 9000,
  },
});