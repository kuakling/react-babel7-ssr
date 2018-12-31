export const ADD_APP_ERROR = 'ADD_APP_ERROR'
export const REMOVE_APP_ERROR = 'REMOVE_APP_ERROR'
export const SET_LOCK_SCREEN = 'SET_LOCK_SCREEN'
export const SET_UNLOCK_SCREEN = 'SET_UNLOCK_SCREEN'


export const addAppError = (props) => ({
  type: ADD_APP_ERROR,
  payload: {
    props
  }
})

export const removeAppError = (id) => ({
  type: REMOVE_APP_ERROR,
  payload: {
    id
  }
})

export const setLockScreen = () => ({
  type: SET_LOCK_SCREEN
})

export const setUnLockScreen = (password) => ({
  type: SET_UNLOCK_SCREEN,
  payload: {
    password
  }
})