const path = require('path');
const thanosWebpackPlugin = require('thanos-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: {
    a: require.resolve('./entry/a.js'),
    b: require.resolve('./entry/b.js'),
    c: require.resolve('./entry/c.js'),
    d: require.resolve('./entry/d.js'),
  },
  output: {
    path: path.join(__dirname, './dist'),
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new thanosWebpackPlugin()
  ]
}