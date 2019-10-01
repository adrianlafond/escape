const path = require('path');
const base = require('./config.base');

module.exports = {
  ...base,
  devtool: 'cheap-module-eval-source-map',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    open: true,
  },
};
