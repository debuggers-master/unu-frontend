import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import getCookie from '../../utils/getCookie'
import { API_URL } from '../../config'
import ModalAction from '../../components/ModalAction'
import ModalState from '../../components/ModalState'

import './styles.scss'
export const ItemDay = ({
  dayIndex,
  organizationName,
  eventId,
  dayId,
  date,
  deleteDay
}) => {
  const [openPrompt, setOpenPrompt] = useState(false)
  const [status, setStatus] = useState()

  const localDate = new Date(date)
    .toLocaleString('es-MX', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    .toUpperCase()
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
      setStatus({ error: 'Ups parece que hubo un error' })
    }
  }
  const showPrompt = () => setOpenPrompt(true)
  const closePrompt = () => setOpenPrompt(false)
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
            <button onClick={showPrompt}>
              <p>Eliminar</p>
            </button>
          </div>
        </div>
      </li>
      <ModalAction
        isOpen={openPrompt}
        nameAction='Eliminar Dia'
        handleAction={handleDelete}
        handleCloseModal={closePrompt}
      />
      {status && (
        <ModalState
          isOpen
          handleAction={() => {
            closePrompt()
            setStatus(null)
          }}
          nameAction='Entendido'
          messageModal={
            status.error ? status.error : 'Modificada exitosamente!'
          }
          stateModal={status.error ? 'check' : 'cross'}
        />
      )}
    </>
  )
}
