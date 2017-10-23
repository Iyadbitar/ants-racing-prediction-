var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, 'client/dist');
var SRC_DIR = path.resolve(__dirname, 'client/src');

var config = {
  entry: {
    app: SRC_DIR + '/index.jsx',
    worker: SRC_DIR + '/worker.js'
  },
  output: {
    path: DIST_DIR,
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions:['.js', '.jsx']
  },
  module : {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query:{
          presets: [ 'es2015', 'react', 'stage-2' ]
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: SRC_DIR + '/index.html',
      excludeChunks: ['worker']
    })
  ],
  devtool: "source-map"
};

module.exports = config;
