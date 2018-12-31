import {
  ADD_APP_ERROR,
  REMOVE_APP_ERROR,
  SET_LOCK_SCREEN,
  SET_UNLOCK_SCREEN,
} from '../actions/app-state'
import { setCookie } from 'app-src/shared/core/helpers'

export const defaultState = {
  errors: [],
  lockScreen: false,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_APP_ERROR: {
      const id = Math.random().toString(36).substr(2, 9)
      const { errors } = state
      errors.push({ id, ...action.payload.props, })
      return {
        ...state,
        errors
      }
    }
    case REMOVE_APP_ERROR:
      {
        const { id } = action.payload
        const { errors } = state
        return {
          ...state,
          errors: errors.filter(el => (el.id !== id))
        }
      }
    case SET_LOCK_SCREEN:
      {
        const newState = {
          ...state,
          lockScreen: true
        }
        const jsonState = JSON.stringify(newState)
        if (!IS_SERVER) {
          setCookie('appState', jsonState, 365)
          window.localStorage.setItem('appState', jsonState)
        }
        return newState
      }
    case SET_UNLOCK_SCREEN:
      {
        let lockScreen = true
        if(action.payload.password === '123456') {
          lockScreen = false
        }else{
          alert("Your Password fail!")
        }
        const newState = {
          ...state,
          lockScreen
        }
        const jsonState = JSON.stringify(newState)
        if (!IS_SERVER) {
          setCookie('appState', jsonState, 365)
          window.localStorage.setItem('appState', jsonState)
        }
        return newState
      }
    default:
      return state
  }
}