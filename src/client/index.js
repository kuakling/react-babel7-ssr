import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'app-src/shared/redux/configure-store'
import App from 'app-src/shared/app'
import config from 'app-src/shared/core/config'

const { appContainerId } = config

const reduxStore = configureStore(window.__REDUX_STATE__)

const routerProps = {
  basename: process.env.REACT_APP_BASE_URL ? `/${process.env.REACT_APP_BASE_URL}` : undefined
}
const render = App => {
  ReactDOM.hydrate(
    <Router {...routerProps}>
      <Provider store={reduxStore}>
        <App />
      </Provider>
    </Router>,
    document.getElementById(appContainerId)
  )
}

render(App)