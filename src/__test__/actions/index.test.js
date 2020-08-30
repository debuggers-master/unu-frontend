import { registerRequest, loginRequest } from '../../actions'

import { userMock } from '../../mocks/userMock'

describe('Actions', () => {
  test('registerRequest', () => {
    const payload = userMock
    const expectedAction = {
      type: 'REGISTER_REQUEST',
      payload
    }
    expect(registerRequest(payload)).toEqual(expectedAction)
  })
  test('loginRequest', () => {
    const payload = userMock
    const expectedAction = {
      type: 'LOGIN_REQUEST',
      payload
    }
    expect(loginRequest(payload)).toEqual(expectedAction)
  })
})
