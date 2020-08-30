import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

const NavRigthEvent = (props) => {
  const openBtn = props.isOpen
  const handleClick = props.handleClick

  return (
    <ul className={
      openBtn
        ? 'NavRigth'
        : 'NavRigth-open'
    }
    >
      <li>
        <Link to='/Dashboard' onClick={handleClick}>Inicio</Link>
      </li>
      <li>
        <Link to='/dashboard/NewEvent' onClick={handleClick}>Que es?</Link>
      </li>
      <li>
        <Link to='/CalendarPage' onClick={handleClick}>Agenda</Link>
      </li>
      <li>
        <Link to='/CalendarPage' onClick={handleClick}>Inscribete</Link>
      </li>
    </ul>
  )
}

export default NavRigthEvent
