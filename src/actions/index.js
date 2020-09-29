import ApiService from '../utils/ApiService'

export const registerRequest = payload => ({
  type: 'REGISTER_REQUEST',
  payload
})
export const loginRequest = payload => ({
  type: 'LOGIN_REQUEST',
  payload
})
export const redirect = payload => ({
  type: 'REDIRECT_TO_URL',
  payload
})
export const signError = payload => ({
  type: 'SIGN_ERROR',
  payload
})
export const loginError = payload => ({
  type: 'LOGIN_ERROR',
  payload
})

export const addCollaboration = payload => ({
  type: 'ADD_COLLABORATION',
  payload
})
export const createEvent = payload => ({
  type: 'CREATE_EVENT',
  payload
})
export const deleteEvent = payload => ({
  type: 'DELETE_EVENT',
  payload
})
export const createOrganization = payload => ({
  type: 'CREATE_ORGANIZATION',
  payload
})
export const deleteOrganization = payload => ({
  type: 'DELETE_ORGANIZATION',
  payload
})

export const registerUser = (payload, redirectUrl) => {
  return async dispatch => {
    try {
      const data = await ApiService.registerUser(payload)
      dispatch(registerRequest(data.user))
      document.cookie = `token=${data.access_token}`
      document.cookie = `userID=${data.user.userId}`
      /*eslint-disable */
      sessionStorage.setItem('myData', JSON.stringify(data.user))
      /* eslint-enable */
      dispatch(signError(null))
      window.location.href = redirectUrl
    } catch (error) {
      console.log(error)
      error.response.status === 409 &&
        dispatch(signError('Usario ya registrado'))
    }
  }
}
export const loginUser = (payload, redirectUrl) => {
  return async dispatch => {
    try {
      const data = await ApiService.loginUser(payload)
      dispatch(loginRequest(data.user))
      document.cookie = `token=${data.access_token}`
      document.cookie = `userID=${data.user.userId}`
      /*eslint-disable */
      console.log(data.user)
      sessionStorage.setItem('myData', JSON.stringify(data.user))
      /* eslint-enable */
      window.location.href = redirectUrl
    } catch (error) {
      console.log(error)
      console.log(error.response)
      error.response.status === 401 && dispatch(loginError('Datos Incorrectos'))
    }
  }
}
