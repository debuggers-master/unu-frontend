import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ModalAction from '../../components/ModalAction'

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

  const localDate = new Date(date)
    .toLocaleString('es-MX', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    .toUpperCase()
  const handleDelete = async () => {
    deleteDay({ eventId, dayId })
    closePrompt()
  }
  const showPrompt = () => setOpenPrompt(true)
  const closePrompt = () => setOpenPrompt(false)
  return (
    <>
      <li>
        <div className='itemDay-day'>
          <div className='itemDay-day__Count'>
            <Link
              to={{
                pathname: `/dashboard/${organizationName}/${eventId}/edit/schedule/${dayId}`,
                state: { date }
              }}
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
    </>
  )
}
