import React from 'react'
import { Link } from 'react-router-dom'

export const ItemDay = () => {
  return (
    <>
      <li>
        <div className='editSchedule-day'>
          <div className='editSchedule-day__Count'>
            <p>Día 0</p>
          </div>
          <div className='editSchedule-day__Calendar'>
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
          <div className='editSchedule-day__Actions'>
            <p>Guardar</p>
            <Link to='/events/edit/agenda/organizationName/eventId/dayId'>
              <p>Editar</p>
            </Link>
            <p>Eliminar</p>
          </div>
        </div>
      </li>
    </>
  )
}
