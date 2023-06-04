const { Configuration } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
/**
 * @type {Configuration}  // 配置智能提示
*/
const config = {
  entry: './index.js',
  mode: 'none',
  output: {
    filename: 'bundle.js',
  },
  devServer: {
    port: 9001, // remote
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new ModuleFederationPlugin({
      name: 'remote',
      filename: 'remoteEntry.js',
      exposes: {
        './addList': './list.js' // 暴露模块的路径
      }
    })
  ],

}

module.exports = config;
