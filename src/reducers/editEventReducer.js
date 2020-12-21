const editEventReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_EDIT_EVENT_ERROR':
      return {
        ...state,
        error: action.payload
      }
    case 'SET_EDIT_EVENT_STATUS':
      return { ...state, status: action.payload }

    case 'SET_EDIT_EVENT':
      return {
        ...state,
        data: action.payload
      }
    case 'UPDATE_EVENT_INFO':
      return {
        ...state,
        data: { ...action.payload.eventData }
      }
    case 'ADD_ASSOCIATE':
      return state
    case 'UPDATE_ASSOCIATE':
      return state
    case 'DELETE_ASSOCIATE':
      return state
      // case 'ADD_EVENT_DAY':
      //   return {
      //     ...state,
      //     data: {
      //       ...state.data,
      //       agenda: [...state.data.agenda, action.payload.dayData]
      //     }
      //   }
      // case 'UPDATE_EVENT_DAY':
      //   const i = state.data.agenda.findIndex(
      //     ({ dayId }) => dayId === action.payload.dayData.dayId
      //   )
      //   const day = state.data.agenda[i]
      //   const dayUpdated = { ...day, date: action.payload.dayData.date }
      //   return {
      //     ...state,
      //     data: {
      //       ...state.data,
      //       agenda: [
      //         ...state.data.agenda.filter(
      //           ({ dayId }) => dayId !== action.payload.dayData.dayId
      //         ),
      //         dayUpdated
      //       ]
      //     }
      //   }
      // case 'DELETE_EVENT_DAY':
      //   return {
      //     ...state,
      //     data: {
      //       ...state.data,
      //       agenda: [
      //         ...state.data.agenda.filter(
      //           ({ dayId }) => dayId !== action.payload.dayId
      //         )
      //       ]
      //     }
      //   }

    case 'UPDATE_AGENDA':
      return {
        ...state,
        data: {
          ...state.data,
          agenda: action.payload
        }
      }
    case 'ADD_COLLABORATOR':
      return state
    case 'DELETE_COLLABORATOR':
      return state
    default:
      return state
  }
}
export default editEventReducer
