import { ADD_APP_ERROR, REMOVE_APP_ERROR } from '../actions/appErrors'


export default (state = [], action) => {
  switch (action.type) {
    case ADD_APP_ERROR: {
      const id = Math.random().toString(36).substr(2, 9)
      return state.concat({
        id,
        ...action.payload.props,
      })
    }
    case REMOVE_APP_ERROR:
      {
        const { id } = action.payload
        return state.filter(el => (el.id !== id))
      }
    default:
      return state
  }
}