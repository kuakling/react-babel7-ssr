import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import App from '../shared/app'
import config from '../shared/core/config'

const { appContainerId } = config

const render = App => {
  ReactDOM.hydrate(
    <Router>
      <App />
    </Router>,
    document.getElementById(appContainerId)
  )
}

render(App)