import React from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'

export const ItemTalk = ({
  organizationName,
  eventId,
  dayId,
  conferenceId,
  name
}) => {
  return (
    <>
      <li key={conferenceId}>
        <div className='ItemTalk-day'>
          <div className='ItemTalk-day__Count'>
            <p>{name}</p>
          </div>
          <div className='ItemTalk-day__Actions'>
            <Link
              to={`/dashboard/${organizationName}/${eventId}/edit/schedule/${dayId}/${conferenceId}`}
            >
              <p>Editar</p>
            </Link>
            <p>Eliminar</p>
          </div>
        </div>
      </li>
    </>
  )
}
