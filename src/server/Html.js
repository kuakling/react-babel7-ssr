import React from 'react'
import { flushChunkNames } from 'react-universal-component/server'
import flushChunks from 'webpack-flush-chunks'
import faviconUrl from './images/favicon.ico'
import config from '../shared/core/config'

const { baseUrl, appContainerId } = config

export const Html = ({
  content,
  clientStats,
  inlineCss,
  styleTags,
}) => {
  try {
    if (content == undefined) return null
    if (clientStats == undefined) return null

    const chunkNames = flushChunkNames()
    const chunks = flushChunks(clientStats, { chunkNames })
    const { CssHash, scripts, stylesheets } = chunks

    const StyledComponent = () => styleTags

    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link rel={'shortcut icon'} href={faviconUrl} />
          {stylesheets.map(href => (<link key={href} rel="stylesheet" href={`${baseUrl}/${href}`} />))}
          <style type="text/css" dangerouslySetInnerHTML={{ __html: inlineCss }} />
          <CssHash />
          <StyledComponent />
        </head>
        <body>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <div id="loading-indicator">
            <div className="loader-circle"></div>
            <h2 className="loader-text" id="loader-text">Loading...</h2>
          </div>
          <div
            id={appContainerId || 'root'}
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <CssHash />
          {scripts.map(src => (<script key={src} type="text/javascript" src={`${baseUrl}/${src}`} defer="" />))}
        </body>
      </html>
    )
  } catch (error) {
    console.log(error)
    return error.toString()
  }
}

export default Html
