
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/client/index.jsx'),
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        },
      },
    ],
  },
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'app.js',
  }
};
