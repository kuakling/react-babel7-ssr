import axios from 'axios'
import {
  SET_CURRENT_USER,
  UNSET_CURRENT_USER,
} from '../actions/current-user'
import config from 'app-src/shared/core/config'
import { setCookie, removeCookie, decodeJWT } from 'app-src/shared/core/helpers'

export const defaultState = null

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      {
        const { token } = action.payload
        const user = decodeJWT(token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        if (!IS_SERVER) {
          setCookie(config.jwt.name, token, 7)
          window.localStorage.setItem(config.jwt.name, token)
        }
        return user
      }
    case UNSET_CURRENT_USER:
      {
        removeCookie(config.jwt.name)
        window.localStorage.removeItem(config.jwt.name)
        axios.defaults.headers.common['Authorization'] = ''
        return null
      }
    default:
      return state
  }
}