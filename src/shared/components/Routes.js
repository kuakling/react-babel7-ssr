import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Pages from './pages'
import AsyncLogin from './pages/AsyncLogin'

export default () => {
  return (
    <Switch>
      <Route path='/login' component={AsyncLogin} />
      <Route path='/' component={Pages} />
    </Switch>
  )
}
