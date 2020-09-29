import axios from 'axios'
import { API_URL } from '../config'
import getCookie from './getCookie'
class ApiService {
  async registerUser (body) {
    const { data } = await axios({
      url: `${API_URL}/auth/signup`,
      method: 'post',
      data: body
    })
    return data
  }

  async loginUser (body) {
    const { data } = await axios({
      url: `${API_URL}/auth/login`,
      method: 'post',
      data: body
    })
    return data
  }

  async newOrg (body) {
    const { data } = await axios(`${API_URL}/api/v1/organizations`, {
      headers: { Authorization: `Bearer ${getCookie('token')}` },
      method: 'POST',
      data: body
    })
    return data
  }

  async deleteOrg (body) {
    const { response } = await axios(`${API_URL}/api/v1/organizations`, {
      headers: { Authorization: `Bearer ${getCookie('token')}` },
      method: 'DELETE',
      data: body
    })
    return response
  }

  async newEvent (body) {
    const { data } = await axios(`${API_URL}/api/v1/events`, {
      headers: { Authorization: `Bearer ${getCookie('token')}` },
      data: body,
      method: 'POST'
    })
    return data
  }

  async deleteEvent (query) {
    const { response } = await axios(`${API_URL}/api/v1/events`, {
      headers: { Authorization: `Bearer ${getCookie('token')}` },
      method: 'DELETE',
      params: query
    })
    return response
  }

  async publishEvent (query) {
    const { response } = await axios(`${API_URL}/api/v1/events/change-status`, {
      headers: { Authorization: `Bearer ${getCookie('token')}` },
      method: 'PUT',
      params: query
    })
    return response
  }

  async getColabs (query) {
    const { data } = await axios(`${API_URL}/api/v1/events`, {
      headers: { Authorization: `Bearer ${getCookie('token')}` },
      params: query
    })
    return data
  }

  async getEvents (query) {
    const { data } = await axios(`${API_URL}/api/v1/events/list`, {
      method: 'GET'
    })
    return data
  }

  async getEventInfo (query) {
    const { data } = await axios(`${API_URL}/api/v1/events`, {
      headers: { Authorization: `Bearer ${getCookie('token')}` },
      params: query
    })
    return data
  }

  async getSchedule (query) {
    const { data } = await axios(`${API_URL}/api/v1/events`, {
      params: query
    })
    return data
  }

  async getAssociates (query) {
    const { data } = await axios(
      `${API_URL}/api/v1/events?eventId=${query.eventId}&filters=associates`,
      {
        headers: { Authorization: `Bearer ${getCookie('token')}` }
      }
    )
    return data
  }

  async addAssociate (body) {
    const { data } = await axios(`${API_URL}/api/v1/events/associates`, {
      headers: { Authorization: `Bearer ${getCookie('token')}` },
      method: 'POST',
      data: body
    })
    return data
  }

  async updateAssociate (body) {
    const { data } = await axios(`${API_URL}/api/v1/events/associates`, {
      headers: { Authorization: `Bearer ${getCookie('token')}` },
      method: 'PUT',
      data: body
    })
    return data
  }

  async getTalk (query) {
    const { data } = await axios(`${API_URL}/api/v1/events`, {
      params: query
    })
    return data
  }

  async newConference (body) {
    await axios(`${API_URL}/api/v1/events/conference`, {
      headers: { Authorization: `Bearer ${getCookie('token')}` },
      method: 'POST',
      data: body
    })
  }

  async updateConference (body) {
    await axios(`${API_URL}/api/v1/events/conference`, {
      headers: { Authorization: `Bearer ${getCookie('token')}` },
      method: 'PUT',
      data: body
    })
  }
}

export default new ApiService()
