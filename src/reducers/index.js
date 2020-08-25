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
