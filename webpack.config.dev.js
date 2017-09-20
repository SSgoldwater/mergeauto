var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(process.cwd(), 'build');
var APP_DIR = path.resolve(process.cwd(), 'src');

var config = {
  context: APP_DIR,
  entry: APP_DIR + '/index.jsx',
  devtool: 'eval',
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 25000,
        }
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve(APP_DIR),
      path.resolve("./node_modules")
    ]
  },
  node: {
    fs: "empty",
    tls: "empty",
    net: "empty"
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
};

module.exports = config;
