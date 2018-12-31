import React from 'react'
import { renderToString, renderToNodeStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { ServerStyleSheet } from 'styled-components'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'
import configureStore from 'app-src/shared/redux/configure-store'
import { defaultState } from 'app-src/shared/redux/reducers/app-state'
import Html from './Html'
import App from 'app-src/shared/app'

export default ({ clientStats, inlineCss }) => async (req, res, next) => {

  const context = {}
  const routerProps = {
    location: req.url,
    context,
    basename: process.env.REACT_APP_BASE_URL ? `/${process.env.REACT_APP_BASE_URL}` : undefined
  }

  const styleSheet = new ServerStyleSheet()

  const reduxState = {
    appState: req.cookies.appState && JSON.parse(req.cookies.appState) || defaultState,
    todos: [{
      id: 1,
      name: 'Walk the dog'
    }, {
      id: 2,
      name: 'Buy butter from the store'
    }]
  }
  const reduxStore = configureStore(reduxState)

  const app = (
    <StaticRouter {...routerProps}>
      <Provider store={reduxStore}>
        <App />
      </Provider>
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
    reduxState,
  }

  const element = <Html {...props} />

  const stream = renderToNodeStream(element)

  res.type('html')

  res.write('<!doctype html>')

  stream.pipe(res)
}
