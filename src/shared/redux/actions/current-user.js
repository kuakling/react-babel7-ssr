export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const UNSET_CURRENT_USER = 'UNSET_CURRENT_USER'

export const setCurrentUser = token => ({
  type: SET_CURRENT_USER,
  payload: {
    token
  }
})

export const unsetCurrentUser = () => ({
  type: UNSET_CURRENT_USER,
})