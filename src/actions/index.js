import axios from 'axios'
import { API_URL } from '../config'

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
export const addOrganization = payload => ({
  type: 'ADD_ORGANIZATION',
  payload
})

export const registerUser = (payload, redirectUrl) => {
  return async dispatch => {
    try {
      const { data } = await axios({
        url: `${API_URL}/auth/signup`,
        method: 'post',
        data: payload
      })
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
      const { data } = await axios({
        url: `${API_URL}/auth/login`,
        method: 'post',
        data: payload
      })
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
      // error.response.status === 401 && dispatch(signError('Datos incorrectos'))
    }
  }
}
// "user": {
//     "email": "name_lasta@organization.com",
//     "firstName": "Mario",
//     "lastName": "Barbosa",
//     "userId": "caf1e98a-c84f-4a8e-9f88-81f6ab3db4a8",
//     "organizations": [],
//     "collaborations": []
//   }
//
// try {
//   {data, status} = axios({})
//   -....
// } catch (err) {
//   if err.response.status === 409 {
//     logica para decirle al usuario que el correo ya está registrado
//   } else if err.response.status === 400 {
//     lógica para decirle que los datos no están completos
//   } else {
//     lógica para decirle al usuario que ocurrió un error (server error). Intentelo más tarde
//   }
// }
