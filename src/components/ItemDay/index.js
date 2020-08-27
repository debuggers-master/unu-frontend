import React from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'

export const ItemDay = ({ organizationId, eventId, dayId, date }) => {
  return (
    <>
      <li>
        <div className='itemDay-day'>
          <div className='itemDay-day__Count'>
            <p>Día 0</p>
          </div>
          <div className='itemDay-day__Calendar'>
            <Link to={`/dashboard/${organizationId}/${eventId}/edit/schedule/${dayId}/date`}>
              <p>{date}</p>
            </Link>
          </div>
          <div className='itemDay-day__Actions'>
            <Link to={`/dashboard/${organizationId}/${eventId}/edit/schedule/${dayId}`}>
              <p>Editar</p>
            </Link>
            <p>Eliminar</p>
          </div>
        </div>
      </li>
    </>
  )
}
