import React from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'

export const ItemDay = ({
  dayIndex,
  organizationName,
  eventId,
  dayId,
  date
}) => {
  const localDate = new Date(date).toLocaleString('es-MX', {
    days: 'numeric',
    hours: 'numeric',
    months: 'numeric'
  })
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
              to={`/dashboard/${organizationName}/${eventId}/edit/schedule/${dayId}/date`}
            >
              <p>{localDate}</p>
            </Link>
          </div>
          <div className='itemDay-day__Actions'>
            <p>Eliminar</p>
          </div>
        </div>
      </li>
    </>
  )
}
