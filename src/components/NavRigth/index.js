import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

const NavRigth = (props) => {
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
        <Link to='/' onClick={handleClick}>Inicio</Link>
      </li>
      <li>
        <Link to='/events'>Eventos</Link>
      </li>
      <li>
        <Link to='/' onClick={handleClick}>Equipo</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  )
}

export default NavRigth
