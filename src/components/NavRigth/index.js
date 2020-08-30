import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

const NavRigth = (props) => {
  const openBtn = props.isOpen
  return (
    <ul className={
      openBtn
        ? 'NavRigth'
        : 'NavRigth-open'
    }
    >
      <li>
        <Link to='/'>Inicio</Link>
      </li>
      <li>
        <Link to='/eventos'>Eventos</Link>
      </li>
      <li>
        <Link to='/CalendarPage'>Calendario</Link>
      </li>
      <li>
        <Link to='/'>Cerrar sesión</Link>
      </li>
    </ul>
  )
}

export default NavRigth
