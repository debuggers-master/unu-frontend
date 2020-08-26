import React from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'

export const ItemDay = () => {
  return (
    <>
      <li>
        <div className='itemDay-day'>
          <div className='itemDay-day__Count'>
            <p>Día 0</p>
          </div>
          <div className='itemDay-day__Calendar'>
            <label htmlFor='start'>Fecha del día:</label>
            <input
              type='date'
              id='start'
              name='EventDay'
              defaultValue='2020-07-22'
              min='2020-01-01'
              max='2020-12-31'
            />
          </div>
          <div className='itemDay-day__Actions'>
            <Link to='/dashboard/organizationName/eventId/edit/schedule/dayId'>
              <p>Editar</p>
            </Link>
            <p>Eliminar</p>
          </div>
        </div>
      </li>
    </>
  )
}
