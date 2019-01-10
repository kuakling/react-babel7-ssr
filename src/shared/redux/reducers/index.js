import { combineReducers } from 'redux'

import todos from './todos'
import appState from './app-state'
import currentUser from './current-user'

export default combineReducers({
  todos,
  appState,
  currentUser,
})