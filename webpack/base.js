const path = require('path')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const base = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [
            ["@babel/preset-react"],
            ["@babel/preset-env"],
          ],
          plugins: [
            ["@babel/plugin-proposal-decorators", { legacy: true }],
            ["@babel/plugin-proposal-class-properties", { "loose": true }],
            ["@babel/plugin-syntax-dynamic-import"],
            ['universal-import', {
              // disableWarnings: true
            }],
            ["react-hot-loader/babel"]
          ],
        }
      },
      {
        test: /\.(gif|ico|jpg|png|svg)$/,
        loader: 'url-loader',
      },
    ]
  },
  resolve: {
    extensions: [ '.mjs', '.js', '.json', '.jsx', '.css' ],
    alias: {
      'app-src': path.resolve(__dirname, '..', 'src'),
      'app-static': path.resolve(__dirname, '..', 'static'),
      'app-components': path.resolve(__dirname, '..', 'src', 'shared', 'components'),
    }
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
  ],
}

module.exports = base