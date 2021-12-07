
const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const webpackConfigBase = require('./webpack.base.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin }  = require('clean-webpack-plugin')
const { proxy, https } = require('./proxy')

try {
  selfIp = getIpAddress()
} catch (e) {
  selfIp = 'localhost'
}

const PORT = 8080
// 精确的获取本机ip地址
function getIpAddress () {
  const interfaces = require('os').networkInterfaces
  for (let devName in interfaces) {
    const iface = interfaces[devName]
    for (let i = 0; i < iface.length; i += 1) {
      let alias = iface[i]
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address
      }
    }
  }
}

function resolve(relatedPath) {
  return path.join(__dirname, relatedPath)
}
const webpackConfigDev = {
  mode: 'development',
  plugins: [
    // 定义环境变量为开发环境
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      IS_DEVELOPMETN: true,
    }),
    // 将打包后的资源注入到html文件内    
    new HtmlWebpackPlugin({
      template: resolve('../src/index.html'),
      dlls: [],
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'source-map',
  devServer: {
    // contentBase: resolve('../src'),
    historyApiFallback: true,
    open: false,
    hot: true, 
    host: selfIp,
    port: PORT,
    proxy: proxy,
    https: https
        ? {
          spdy: {
            protocols: ['http1.1'], // 解决 JSON 响应过大被截断的问题：https://github.com/webpack/webpack-dev-server/issues/1574
          },
        }
        : false,
  },
}

module.exports = merge(webpackConfigBase, webpackConfigDev)
