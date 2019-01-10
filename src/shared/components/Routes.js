import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Pages from './pages'
import AsyncLogin from './pages/AsyncLogin'
import AsyncSignup from './pages/AsyncSignup'

export default () => {
  return (
    <Switch>
      <Route path='/login' component={AsyncLogin} />
      <Route path='/signup' component={AsyncSignup} />
      <Route path='/' component={Pages} />
    </Switch>
  )
}
