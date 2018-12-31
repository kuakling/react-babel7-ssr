// https://github.com/mikebars/react-loadable-boilerplate
// https://github.com/mikebars/react-universal-component-boilerplate
require('@babel/polyfill')
const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const express = require('express')
const chalk = require('chalk')

const baseUrl = process.env.REACT_APP_BASE_URL ? `/${process.env.REACT_APP_BASE_URL}` : ''

const app = express()

app.use(`${baseUrl}/static`, express.static(path.resolve(__dirname, '../static')))

const DEV = process.env.NODE_ENV === 'development'

let isBuild = false

const done = () => {
  return !isBuild && app.listen(4000, () => {
    isBuild = true
    console.log(chalk.greenBright('✅ Server started.'))
    console.log(chalk.cyanBright('🌐 Listening @ http://localhost:4000'))
  })
}

const serverRendererOptions = {
  inlineCss: fs.readFileSync(path.resolve(__dirname, 'server', 'css', 'main.css'), 'utf8').replace(/\s+/g, " ").trim()
}

const runProductionServer = () => {
  console.log(chalk.yellowBright('▶ Starting Production Server...'))
  const clientConfig = require('../webpack/client.prod')
  const serverConfig = require('../webpack/server.prod')
  const publicPath = clientConfig.output.publicPath
  const outputPath = clientConfig.output.path
  const statsFile = path.resolve(outputPath, 'stats.json')
  const serverFile = path.resolve(serverConfig.output.path, serverConfig.output.filename)

  const clientStats = require(statsFile)
  const serverRender = require(serverFile).default
  app.use(publicPath, express.static(outputPath))
  app.use(serverRender({ clientStats, ...serverRendererOptions }))

  done()
}

if (process.env.SERVE === 'true') {
  runProductionServer()
} else {
  if (DEV) {
    const clientConfig = require('../webpack/client.dev')
    const serverConfig = require('../webpack/server.dev')

    const webpackDevMiddleware = require('webpack-dev-middleware')
    const webpackHotMiddleware = require('webpack-hot-middleware')
    const webpackHotServerMiddleware = require('webpack-hot-server-middleware')

    const compiler = webpack([clientConfig, serverConfig])
    const clientCompiler = compiler.compilers[0]

    app.use(webpackDevMiddleware(compiler))
    app.use(webpackHotMiddleware(clientCompiler))
    app.use(webpackHotServerMiddleware(compiler, { serverRendererOptions }))

    compiler.plugin('done', done)
  } else {
    const clientConfig = require('../webpack/client.prod')
    const serverConfig = require('../webpack/server.prod')

    const compiler = webpack([clientConfig, serverConfig])
    compiler.run((err) => {
      if (err) {
        console.log(chalk.redBright('🤬 Webpack compiler encountered a fatal error.'), err)
        return reject(err)
      }
      // console.log('Build Complete')
      if (process.env.RUN === 'true') {
        runProductionServer()
      }
    })
  }
}