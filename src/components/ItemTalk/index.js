import React from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'

export const ItemTalk = ({ organizationId, eventId, dayId, dataConference }) => {
  return (
    <>
      <li key={dataConference.conferenceId}>
        <div className='ItemTalk-day'>
          <div className='ItemTalk-day__Count'>
            <p>{dataConference.name}</p>
          </div>
          <div className='ItemTalk-day__Actions'>
            <Link to={`/dashboard/${organizationId}/${eventId}/edit/schedule/${dayId}/talkId`}>
              <p>Editar</p>
            </Link>
            <p>Eliminar</p>
          </div>
        </div>
      </li>
    </>
  )
}
