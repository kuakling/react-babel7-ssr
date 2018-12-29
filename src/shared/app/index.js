import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import Home from '../components/Home'
import NoMatch from '../components/NoMatch'
import AsyncAbout from '../components/AsyncAbout'
import AsyncUser from '../components/AsyncUser'

import './app.css'

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
              <Link to="/no-match">No Match</Link>
            </li>
          </ul>
        </nav>
        <div className="container">
          <h1>Hello React {React.version}</h1>
          <div className={`route-zone`}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={AsyncAbout} />
              <Route path="/user" component={AsyncUser} />
              <Route component={NoMatch} />
            </Switch>
          </div>
          <button onClick={this.test} className="btn">Test button</button>
        </div>
      </div>
    )
  }
}
