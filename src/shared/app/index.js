import React, { Component } from 'react'
import { Switch, Route, Link, withRouter } from 'react-router-dom'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import Home from 'app-components/Home'
import NoMatch from 'app-components/NoMatch'
import LockScreen from 'app-components/LockScreen'
import AsyncAbout from 'app-components/AsyncAbout'
import AsyncUser from 'app-components/AsyncUser'
import AsyncStylus from 'app-components/AsyncStylus'
import AsyncTodos from 'app-components/AsyncTodos'

import { setLockScreen } from 'app-src/shared/redux/actions/app-state'

import '../style.global.styl'
import css from './app.css'

const mapStateToProps = ({ appState }) => ({
  appState
})

@withRouter
@connect(mapStateToProps, {
  setLockScreen
})
export default class App extends Component {
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
  }

  test = () => {
    alert('TEST')
  }

  render() {
    const { appState } = this.props
    if (appState.lockScreen) return <LockScreen />
    return (
      <div>
        <Helmet
          htmlAttributes={{ "lang": "th" }}
          titleTemplate="%s :: Site name"
          defaultTitle="Default Page Title"
        />
        <nav className={`main-nav`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
            <li>
              <Link to="/stylus">Stylus</Link>
            </li>
            <li>
              <Link to="/todos">Redux</Link>
            </li>
            <li>
              <Link to="/no-match">No Match</Link>
            </li>
          </ul>
        </nav>
        <div className="container">
          <h1 className={css.title}>Hello React {React.version}</h1>
          <div className={`route-zone`}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={AsyncAbout} />
              <Route path="/user" component={AsyncUser} />
              <Route path="/stylus" component={AsyncStylus} />
              <Route path="/todos" component={AsyncTodos} />
              <Route component={NoMatch} />
            </Switch>
          </div>
          <button onClick={this.test} className="btn">Test button</button>
        </div>

        <button className={css.btn__lock_screen} onClick={() => this.props.setLockScreen() }>Lock screen</button>
      </div>
    )
  }
}
