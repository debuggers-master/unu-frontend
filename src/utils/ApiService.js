import axios from 'axios'
import { API_URL } from '../config'
import getCookie from './getCookie'
class ApiService {
  async getUserInfo () {
    const { data } = await axios({
      url: `${API_URL}/api/v1/users`,
      headers: { Authorization: `Bearer ${getCookie('token')}` },
      method: 'GET'
    })
    return data
  }

  async registerUser (body) {
    const { data } = await axios({
      url: `${API_URL}/auth/signup`,
      method: 'POST',
      data: body
    })
    return data
  }

  async registerCollab (body) {
    const { response } = await axios(`${API_URL}/api/v1/events/collaborators`, {
      headers: { Authorization: `Bearer ${getCookie('token')}` },
      data: body,
      method: 'POST'
    })
    return response
  }

  async removeCollab (body) {
    const { response } = await axios(`${API_URL}/api/v1/events/collaborators`, {
      headers: { Authorization: `Bearer ${getCookie('token')}` },
      data: body,
      method: 'DELETE'
    })
    return response
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

  async updateEvent (body) {
    const { response } = await axios(`${API_URL}/api/v1/events`, {
      headers: { Authorization: `Bearer ${getCookie('token')}` },
      method: 'PUT',
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

  async getPublishedEvents () {
    const { data } = await axios(`${API_URL}/api/v1/events/list`)
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
    const { data } = await axios(
      `${API_URL}/api/v1/events?eventId=${query.eventId}&filters=agenda`
    )
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

  async deleteAssociate (body) {
    const { data } = await axios(`${API_URL}/api/v1/events/associates`, {
      headers: { Authorization: `Bearer ${getCookie('token')}` },
      method: 'DELETE',
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

  async createDay (body) {
    const { response } = await axios(`${API_URL}/api/v1/events/day`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${getCookie('token')}` },
      data: body
    })
    return response
  }

  async deleteDay (body) {
    console.log(body)
    const { response } = await axios(`${API_URL}/api/v1/events/day`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${getCookie('token')}` },
      data: body
    })
    return response
  }

  async updateDay (body) {
    const { response } = await axios(`${API_URL}/api/v1/events/day`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${getCookie('token')}` },
      data: body
    })
    return response
  }

  async getAllTalks (query) {
    const { data } = await axios(`${API_URL}/api/v1/events`, {
      params: query
    })
    return data
  }

  async newTalk (body) {
    console.log('new talk api service', body)
    await axios(`${API_URL}/api/v1/events/conference`, {
      headers: { Authorization: `Bearer ${getCookie('token')}` },
      method: 'POST',
      data: body
    })
  }

  async updateTalk (body) {
    await axios(`${API_URL}/api/v1/events/conference`, {
      headers: { Authorization: `Bearer ${getCookie('token')}` },
      method: 'PUT',
      data: body
    })
  }

  async deleteTalk (body) {
    console.log('body en api service', body)
    await axios(`${API_URL}/api/v1/events/conference`, {
      headers: { Authorization: `Bearer ${getCookie('token')}` },
      method: 'DELETE',
      data: body
    })
  }
}

export default new ApiService()
