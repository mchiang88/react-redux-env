var path = require('path');
var webpack = require('webpack');

module.exports = {
  devServer: {
    inline: true,
    contentBase: './public',
    port: 1128
  },
  mode: 'development',
  entry: path.resolve(__dirname, './dev'),
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js[x]?/,
        exclude: /node_modules/,
        options: {
          presets: ['react', 'env'],
        },
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};