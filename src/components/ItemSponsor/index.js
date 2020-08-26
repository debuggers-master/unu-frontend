import React from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'

export const ItemSponsor = () => {
  return (
    <>
      <li>
        <div className='ItemTalk-day'>
          <div className='ItemTalk-day__Count'>
            <p>Nombre del asociado</p>
          </div>
          <div className='ItemTalk-day__Actions'>
            <p>Guardar</p>
            <Link to='/dashboard/organizationName/eventId/edit/sponsor/edit/sponsorId'>
              <p>Editar</p>
            </Link>
            <p>Eliminar</p>
          </div>
        </div>
      </li>
    </>
  )
}
