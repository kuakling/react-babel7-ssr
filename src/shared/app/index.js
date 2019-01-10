import React, { Component, Fragment } from 'react'
import { hot } from 'react-hot-loader'
import { withRouter } from 'react-router-dom'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import config from 'app-src/shared/core/config'

import Routes from '../components/Routes'

import LockScreen from 'app-components/LockScreen'
import { setCurrentUser } from 'app-src/shared/redux/actions/current-user'

import '../style.global.styl'

const mapStateToProps = ({ appState, currentUser }) => ({
  appState,
  currentUser
})
class App extends Component {
  componentDidMount = () => {
    const ele = document.getElementById('loading-indicator')
    const loaderText = document.getElementById('loader-text')
    if (ele) {
      // fade out
      ele.classList.add('available')
      loaderText.innerText = 'Complete'
      setTimeout(() => {
        // ele.classList.add('available')
        // remove from DOM
        ele.outerHTML = ''
      }, 1000)
    }

    const token = window.localStorage.getItem(config.jwt.name)
    if(!!token){
      this.props.setCurrentUser(token)
    }
  }

  render() {
    const { appState } = this.props
    if (appState.lockScreen) return <LockScreen />
    return (
      <Fragment>
        <Helmet
          htmlAttributes={{ "lang": "th" }}
          titleTemplate="%s :: Site name"
          defaultTitle="Default Page Title"
        />
        <Routes />
      </Fragment>
    )
  }
}

export default hot(module)(
  withRouter(
    connect(mapStateToProps, {
      setCurrentUser
    })(App)
  )
)