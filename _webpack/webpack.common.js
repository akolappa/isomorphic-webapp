const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    app: './src/client/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../_dist'),
    filename: 'bundle.js',
  // publicPath: '.', // current folder notation
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins : [
    new HtmlWebpackPlugin({
      title: "My website", // title will work only if we don't have templates
      template: path.resolve(__dirname, "../_template/client.html"),
    }),
    new CleanWebpackPlugin(),
  ],
};