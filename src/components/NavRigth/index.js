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
        <Link to='/events'>Eventos</Link>
      </li>
      <li>
        <Link to='/'>Equipo</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  )
}

export default NavRigth
