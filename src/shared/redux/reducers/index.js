import { combineReducers } from 'redux'

import todos from './todos'
import appState from './app-state'

export default combineReducers({
  todos,
  appState,
})