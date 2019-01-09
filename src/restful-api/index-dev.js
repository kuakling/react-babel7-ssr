import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import chalk from 'chalk'
import routes from './routes'

const app = express()

const PORT = 4001

app.use(cors())
app.use( bodyParser.json() )        // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}))
app.use(cookieParser())
routes.map(route => {
  app.use(route.url, route.middleware)
})

app.listen(PORT, () => {
  console.log(chalk.greenBright(`✅ API Server started.`))
  console.log(chalk.cyanBright(`🌐 API Listening @ http://localhost:${PORT}`))
})