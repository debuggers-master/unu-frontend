import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import getCookie from '../../utils/getCookie'
import { API_URL } from '../../config'
import './styles.scss'

export const ItemDay = ({
  dayIndex,
  organizationName,
  eventId,
  dayId,
  date,
  deleteDay
}) => {
  const localDate = new Date(date).toLocaleString('es-MX', {
    days: 'numeric',
    hours: 'numeric',
    months: 'numeric'
  })
  const handleDelete = async () => {
    try {
      await axios(`${API_URL}/api/v1/events/day`, {
        headers: { Authorization: `Bearer ${getCookie('token')}` },
        method: 'DELETE',
        data: {
          eventId,
          dayId
        }
      })
      deleteDay(dayId)
      console.log('Eliminado exitosamente')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <li>
        <div className='itemDay-day'>
          <div className='itemDay-day__Count'>
            <Link
              to={`/dashboard/${organizationName}/${eventId}/edit/schedule/${dayId}`}
            >
              <p>Dia {dayIndex}</p>
            </Link>
          </div>
          <div className='itemDay-day__Calendar'>
            <Link
              to={`/dashboard/${organizationName}/${eventId}/edit/scheduleDay/${dayId}`}
            >
              <p>{localDate}</p>
            </Link>
          </div>
          <div className='itemDay-day__Actions'>
            <button onClick={handleDelete}>
              <p>Eliminar</p>
            </button>
          </div>
        </div>
      </li>
    </>
  )
}
