import React, { Component, Fragment } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './Home'
import NoMatch from 'app-components/NoMatch'
import AsyncAbout from './AsyncAbout'
import AsyncUser from './AsyncUser'
import AsyncStylus from './AsyncStylus'
import AsyncTodos from './AsyncTodos'
import AsyncAuthorization from './AsyncAuthorization'
import css from './pages.css'

import { setLockScreen } from 'app-src/shared/redux/actions/app-state'
import { unsetCurrentUser } from 'app-src/shared/redux/actions/current-user'

@connect(({ currentUser }) => ({ currentUser }), {
  setLockScreen,
  unsetCurrentUser
})
export default class Pages extends Component {
  handleUnsetCurrentUser = e => {
    e.preventDefault()
    this.props.unsetCurrentUser()
  }
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
            {
              (!!this.props.currentUser) ?
                <li>
                  <a href="#" onClick={this.handleUnsetCurrentUser}>Logout</a>
                </li>
                :
                <Fragment>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/signup">Signup</Link>
                  </li>
                </Fragment>
            }
            <li>
              <Link to="/authorization">Authorization</Link>
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
              <Route path="/authorization" component={AsyncAuthorization} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </div>

        <button className={css.btn__lock_screen} onClick={() => this.props.setLockScreen()}>Lock screen</button>
      </div>
    )
  }
}
