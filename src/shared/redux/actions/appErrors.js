export const ADD_APP_ERROR = 'ADD_APP_ERROR'
export const REMOVE_APP_ERROR = 'REMOVE_APP_ERROR'


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