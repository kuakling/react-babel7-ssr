import React from 'react'
import { renderToString, renderToStaticNodeStream } from 'react-dom/server'
import { StaticRouter } from "react-router-dom"
import Html from './Html'
import App from '../shared/app'

export default ({ clientStats, inlineCss }) => async (req, res, next) => {
  
  const context = {};
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

  const content = renderToString(app)

  const props = {
    content,
    clientStats,
    inlineCss,
  }

  const element = <Html {...props} />

  const stream = renderToStaticNodeStream(element)

  res.type('html')

  res.write('<!doctype html>')

  stream.pipe(res)
}
