const reducers = (state, action) => {
  switch (action.type) {
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload
      }
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload
      }
    case 'DELETE_EVENT':
      return {
        ...state,
        user: {
          ...state.user,
          myEvents: state.user.myEvents.filter(
            ({ eventId }) => eventId !== action.payload
          )
        }
      }
    case 'DELETE_ORGANIZATION':
      return {
        ...state,
        user: {
          ...state.user,
          organizations: state.user.organizations.filter(
            ({ organizationId }) => organizationId !== action.payload
          )
        }
      }
    case 'CREATE_EVENT':
      return {
        ...state,
        user: {
          ...state.user,
          myEvents: [...state.user.myEvents, action.payload]
        }
      }

    case 'REDIRECT_TO_URL':
      return {
        ...state,
        redirectTo: action.payload
      }
    case 'SIGN_ERROR':
      return {
        ...state,
        errors: { signError: action.payload }
      }

    default:
      return state
  }
}

export default reducers
