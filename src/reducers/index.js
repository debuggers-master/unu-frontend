const sessionStorage = window.sessionStorage
const reducers = (state, action) => {
  let newState
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
      newState = {
        ...state,
        user: {
          ...state.user,
          myEvents: state.user.myEvents.filter(
            ({ eventId }) => eventId !== action.payload
          )
        }
      }
      sessionStorage.setItem('myData', JSON.stringify(newState.user))
      return newState
    case 'DELETE_ORGANIZATION':
      newState = {
        ...state,
        user: {
          ...state.user,
          organizations: state.user.organizations.filter(
            ({ organizationId }) => organizationId !== action.payload
          )
        }
      }
      sessionStorage.setItem('myData', JSON.stringify(newState.user))
      return newState
    case 'CREATE_ORGANIZATION':
      newState = {
        ...state,
        user: {
          ...state.user,
          organizations: [...state.user.organizations, action.payload]
        }
      }
      sessionStorage.setItem('myData', JSON.stringify(newState.user))
      return newState
    case 'CREATE_EVENT':
      newState = {
        ...state,
        user: {
          ...state.user,
          myEvents: [...state.user.myEvents, action.payload]
        }
      }
      sessionStorage.setItem('myData', JSON.stringify(newState.user))
      return newState

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
    case 'LOGIN_ERROR':
      return {
        ...state,
        errors: { loginError: action.payload }
      }

    default:
      return state
  }
}

export default reducers
