import ApiService from '../utils/ApiService'

export const redirect = payload => ({
  type: 'REDIRECT_TO_URL',
  payload
})
export const signError = payload => ({
  type: 'SIGN_ERROR',
  payload
})
export const signSuccess = payload => ({
  type: 'SIGN_SUCCESS',
  payload
})
export const loginSuccess = payload => ({
  type: 'LOGIN_SUCCESS',
  payload
})
export const loginError = payload => ({
  type: 'LOGIN_ERROR',
  payload
})

export const setUserData = payload => ({
  type: 'SET_USER_DATA',
  payload
})
export const setUserStatus = payload => ({
  type: 'SET_USER_STATUS',
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
export const setCurrentEvent = payload => ({
  type: 'SET_CURRENT_EVENT',
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

export const registerRequest = (payload, redirectUrl) => {
  return async dispatch => {
    try {
      dispatch(setUserStatus('loading'))
      const data = await ApiService.registerUser(payload)
      dispatch(setUserData(data.user))
      document.cookie = `token=${data.access_token}`
      document.cookie = `userID=${data.user.userId}`
      /*eslint-disable */
      sessionStorage.setItem('myData', JSON.stringify(data.user))
      /* eslint-enable */
      dispatch(setUserStatus('success'))
      dispatch(signError(null))
      window.location.href = redirectUrl
    } catch (error) {
      console.log(error)
      dispatch(setUserStatus('error'))
      error.response.status === 409 &&
        dispatch(signError('Usario ya registrado'))
    }
  }
}
export const loginRequest = (payload, redirectUrl) => {
  return async dispatch => {
    try {
      dispatch(setUserStatus('loading'))
      const data = await ApiService.loginUser(payload)
      dispatch(setUserData(data.user))
      document.cookie = `token=${data.access_token}`
      document.cookie = `userID=${data.user.userId}`
      /*eslint-disable */
      console.log(data.user)
      dispatch(setUserStatus('success'))
      dispatch(loginError(null))
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
