const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        data: action.payload
      }
    case 'SET_USER_STATUS':
      return {
        ...state,
        status: action.payload
      }
    case 'REDIRECT_TO_URL':
      return {
        ...state,
        redirectTo: action.payload
      }
    case 'SIGN_ERROR':
      return {
        ...state,
        error: { signError: action.payload }
      }
    case 'LOGIN_ERROR':
      return {
        ...state,
        error: { loginError: action.payload }
      }
    default:
      return state
  }
}
export default userReducer
