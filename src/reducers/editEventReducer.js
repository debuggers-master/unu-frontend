const editEventReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_EDIT_EVENT':
      return {
        ...action.payload
      }
    default:
      return state
  }
}
export default editEventReducer
