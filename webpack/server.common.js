const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./base')

module.exports = merge(base, {
  name: 'server',
  target: 'node',
  externals: {
    'node-fetch': 'isomorphic-fetch'
  },
  module: {
    rules: [
      {
        test: /\.(styl|css)$/,
        exclude: [/node_modules/, /\.global\.styl/],
        use: [
          {
            loader: 'css-loader',
            options: {
              exportOnlyLocals: true,
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            },
          },
          'stylus-loader',
        ]
      },
      {
        test: /\.global\.(styl|css)$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              exportOnlyLocals: true,
            },
          },
          'stylus-loader'
        ]
      },
    ]
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
    new webpack.DefinePlugin({
      IS_SERVER: true
    }),
  ],
})