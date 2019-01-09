import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './Home'
import NoMatch from 'app-components/NoMatch'
import AsyncAbout from './AsyncAbout'
import AsyncUser from './AsyncUser'
import AsyncStylus from './AsyncStylus'
import AsyncTodos from './AsyncTodos'
import css from './pages.css'

import { setLockScreen } from 'app-src/shared/redux/actions/app-state'

@connect(null, {
  setLockScreen
})
export default class Pages extends Component {
  render() {
    return (
      <div>
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
              <Link to="/login">Login</Link>
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
        </div>

        <button className={css.btn__lock_screen} onClick={() => this.props.setLockScreen()}>Lock screen</button>
      </div>
    )
  }
}
