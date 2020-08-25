import React from 'react'
import { Link } from 'react-router-dom'


export const ItemTalk = () => {
  return (
    <>
      <li>
        <div className='editSchedule-day'>
          <div className='editSchedule-day__Count'>
            <p>Nombre del Asociado</p>
          </div>
          <div className='editSchedule-day__Actions'>
            <p>Guardar</p>
            <Link to='/'>
              <p>Editar</p>
            </Link>
            <p>Eliminar</p>
          </div>
        </div>
      </li>
    </>
  )
}
