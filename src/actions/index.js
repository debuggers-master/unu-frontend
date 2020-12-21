import ApiService from '../utils/ApiService'
const eventRequest = cb => {
  return async dispatch => {
    dispatch(setEditEventStatus('loading'))
    try {
      await cb(dispatch)
      dispatch(setEditEventStatus('success'))
    } catch (e) {
      console.log(e)
      dispatch(setEditEventStatus('error', e))
    }
  }
}
const userRequest = cb => {
  return async dispatch => {
    dispatch(setUserStatus('loading'))
    try {
      await cb(dispatch)
      dispatch(setUserStatus('success'))
    } catch (e) {
      dispatch(setUserStatus('error', 'Ups! Ocurrio un error'))
    }
  }
}
// ------------- Start Auth Actions --------------
export const setRedirectUrl = payload => ({
  type: 'SET_REDIRECT_URL',
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
export const setUserStatus = (payload, error) => {
  return async dispatch => {
    dispatch({
      type: 'SET_USER_STATUS',
      payload
    })
    if (payload === 'success') {
      dispatch(setUserError(null))
    }
    if (payload === 'loading') {
      dispatch(setUserError(null))
    }
    if (payload === 'idle') {
      dispatch(setUserError(null))
    }
    if (payload === 'error') {
      dispatch(setUserError(error))
    }
  }
}
export const setUserError = payload => ({
  type: 'SET_USER_ERROR',
  payload
})
// ------------- Ends Auth Actions --------------

// ------------- Start Event Actions --------------
export const setEditEventError = payload => ({
  type: 'SET_EDIT_EVENT_ERROR',
  payload
})
export const setEditEventStatus = (payload, error) => {
  return async dispatch => {
    dispatch({
      type: 'SET_EDIT_EVENT_STATUS',
      payload
    })
    if (payload === 'success') {
      dispatch(setEditEventError(null))
    }
    if (payload === 'loading') {
      dispatch(setEditEventError(null))
    }
    if (payload === 'idle') {
      dispatch(setEditEventError(null))
    }
    if (payload === 'error') {
      dispatch(setEditEventError(error))
    }
  }
}
export const setEditEvent = payload => ({
  type: 'SET_EDIT_EVENT',
  payload
})
export const updateEventInfo = payload => ({
  type: 'UPDATE_EVENT_INFO',
  payload
})

export const addAssociate = payload => ({
  type: 'ADD_ASSOCIATE',
  payload
})
export const updateAssociate = payload => ({
  type: 'UPDATE_ASSOCIATE',
  payload: payload
})
export const deleteAssociate = payload => ({
  type: 'DELETE_ASSOCIATE',
  payload
})
export const updateAgenda = payload => ({
  type: 'UPDATE_AGENDA',
  payload
})
export const addCollaborator = payload => ({
  type: 'ADD_COLLABORATOR',
  payload
})
export const deleteCollaborator = payload => ({
  type: 'DELETE_COLLABORATOR',
  payload
})
export const setEditEventRequest = payload => {
  return eventRequest(async dispatch => {
    const res = await ApiService.getEventInfo(payload)
    dispatch(setEditEvent(res))
  })
}
export const updateEventInfoRequest = payload => {
  return eventRequest(async dispatch => {
    await ApiService.updateEvent(payload)
    dispatch(updateEventInfo(payload))
    dispatch(getUserInfoRequest())
  })
}
export const addAssociateRequest = payload => {
  return eventRequest(async dispatch => {
    const res = await ApiService.addAssociate(payload)
    const _payload = { ...payload, eventId: res.eventId }
    dispatch(addAssociate(_payload))
  })
}
export const updateAssociateRequest = payload => {
  return eventRequest(async dispatch => {
    const res = await ApiService.updateAssociate(payload)
    const _payload = res.associateData
    dispatch(updateAssociate(_payload))
  })
}
export const deleteAssociateRequest = payload => {
  return eventRequest(async dispatch => {
    const res = await ApiService.deleteAssociate(payload)
    dispatch(deleteAssociate(payload, res))
  })
}
export const addEventDayRequest = payload => {
  return eventRequest(async dispatch => {
    await ApiService.createDay(payload)
    const { agenda } = await ApiService.getSchedule({
      eventId: payload.eventId
    })
    dispatch(updateAgenda(agenda))
  })
}
export const updateEventDayRequest = payload => {
  return eventRequest(async dispatch => {
    await ApiService.updateDay(payload)
    const { agenda } = await ApiService.getSchedule({
      eventId: payload.eventId
    })
    dispatch(updateAgenda(agenda))
  })
}
export const deleteEventDayRequest = payload => {
  return eventRequest(async dispatch => {
    await ApiService.deleteDay(payload)
    const { agenda } = await ApiService.getSchedule({
      eventId: payload.eventId
    })
    dispatch(updateAgenda(agenda))
  })
}
export const addTalkRequest = payload => {
  return eventRequest(async dispatch => {
    await ApiService.newTalk(payload)
    const { agenda } = await ApiService.getSchedule({
      eventId: payload.eventId
    })
    dispatch(updateAgenda(agenda))
  })
}
export const updateTalkRequest = payload => {
  return eventRequest(async dispatch => {
    await ApiService.updateTalk(payload)
    const { agenda } = await ApiService.getSchedule({
      eventId: payload.eventId
    })
    dispatch(updateAgenda(agenda))
  })
}
export const deleteTalkRequest = payload => {
  return eventRequest(async dispatch => {
    await ApiService.deleteTalk(payload)
    const { agenda } = await ApiService.getSchedule({
      eventId: payload.eventId
    })
    dispatch(updateAgenda(agenda))
  })
}
export const addCollaboratorRequest = payload => {
  return eventRequest(async dispatch => {
    const res = await ApiService.registerCollab(payload)
    dispatch(addCollaborator(payload, res))
  })
}
export const deleteCollaboratorRequest = payload => {
  return eventRequest(async dispatch => {
    const res = await ApiService.removeCollab(payload)
    dispatch(deleteCollaborator(payload, res))
  })
}

// ------------- Ends Event Actions --------------

// ------------- Starts Org Actions --------------

export const deleteOrgRequest = payload => {
  return userRequest(async dispatch => {
    await ApiService.deleteOrg(payload)
    dispatch(getUserInfoRequest())
    dispatch(setRedirectUrl(true))
  })
}
// ------------- Ends Org Actions --------------

// ------------- Starts User Actions --------------
export const newOrgRequest = payload => {
  return userRequest(async dispatch => {
    await ApiService.newOrg(payload)
    dispatch(getUserInfoRequest())
    dispatch(setRedirectUrl(true))
  })
}
export const newEventRequest = payload => {
  return userRequest(async dispatch => {
    const { eventId } = await ApiService.newEvent(payload)
    dispatch(getUserInfoRequest())
    dispatch(setEditEventRequest({ eventId }))
    dispatch(setRedirectUrl(eventId))
  })
}
export const deleteEventRequest = payload => {
  return userRequest(async dispatch => {
    await ApiService.deleteEvent(payload)
    dispatch(getUserInfoRequest())
  })
}

export const getUserInfoRequest = () => {
  return async dispatch => {
    try {
      dispatch(setUserStatus('loading'))
      const res = await ApiService.getUserInfo()
      dispatch(setUserData(res))
      /*eslint-disable */
      sessionStorage.setItem('myData', JSON.stringify(res))
      /* eslint-enable */
      dispatch(setUserStatus('success'))
    } catch (e) {
      dispatch(setUserStatus('error'))
    }
  }
}
// ------------- Ends User Actions --------------

// ------------- Start Auth Actions --------------
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
