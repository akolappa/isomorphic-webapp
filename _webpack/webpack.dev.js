const merge = require('webpack-merge');
const CommonConfig = require('./webpack.common');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Visualizer = require('webpack-visualizer-plugin');

module.exports = merge(CommonConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../_dist'),
    compress: true,
    port: 9000,
  },
  plugins:[
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static',
      reportFilename: path.resolve(__dirname, `../_dist/bundle.html`),
    }),
    new Visualizer({
      filename: './visualizer.html',
    }),
  ],
});