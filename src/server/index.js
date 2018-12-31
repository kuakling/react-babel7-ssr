import React from 'react'
import { renderToString, renderToNodeStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { ServerStyleSheet } from 'styled-components'
import { Helmet } from 'react-helmet'
import Html from './Html'
import App from '../shared/app'

export default ({ clientStats, inlineCss }) => async (req, res, next) => {
  
  const context = {}

  const styleSheet = new ServerStyleSheet()

  const app = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  )
  if (context.url) {
    // Somewhere a `<Redirect>` was rendered
    redirect(301, context.url);
  } else {
    // we're good, send the response
  }

  const content = renderToString(styleSheet.collectStyles(app))

  const styleTags = styleSheet.getStyleElement()

  const helmet = Helmet.renderStatic()

  const props = {
    content,
    clientStats,
    inlineCss,
    styleTags,
    helmet,
  }

  const element = <Html {...props} />

  const stream = renderToNodeStream(element)

  res.type('html')

  res.write('<!doctype html>')

  stream.pipe(res)
}
