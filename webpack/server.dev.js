const resolvePath = path => require('path').resolve(__dirname, path)
const merge = require('webpack-merge')
const common = require('./server.common')

const serverConfig = merge(common, {
  mode: 'development',
  devtool: 'eval',
  output: {
    libraryTarget: 'commonjs2',
    filename: 'mainServer.js',
    path: resolvePath('../dist-dev/server'),
    publicPath: '/',
  },
})

module.exports = serverConfig