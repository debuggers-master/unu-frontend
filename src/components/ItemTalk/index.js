import React from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'

export const ItemTalk = () => {
  return (
    <>
      <li>
        <div className='ItemTalk-day'>
          <div className='ItemTalk-day__Count'>
            <p>Nombre o titulo de la charla</p>
          </div>
          <div className='ItemTalk-day__Actions'>
            <p>Guardar</p>
            <Link to='/dashboard/organizationName/eventId/edit/schedule/dayId/talkId'>
              <p>Editar</p>
            </Link>
            <p>Eliminar</p>
          </div>
        </div>
      </li>
    </>
  )
}
