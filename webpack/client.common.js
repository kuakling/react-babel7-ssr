const resolvePath = path => require('path').resolve(__dirname, path)
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const merge = require('webpack-merge')
const env = require('./env')
const base = require('./base')

module.exports = merge(base, {
  name: 'client',
  target: 'web',
  entry: [
    '@babel/polyfill',
    resolvePath('../src/client/index.js')
  ],
  module: {
    rules: [
      {
        test: /\.(styl|css)$/,
        exclude: [/node_modules/, /\.global\.styl/],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          },
          'stylus-loader',
        ]
      },
      {
        test: /\.global\.(styl|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'stylus-loader'
        ]
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_SERVER: false,
      ...env()
    }),
  ]
})