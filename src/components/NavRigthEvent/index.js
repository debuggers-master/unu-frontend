import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ModalAction from '../ModalAction'
import './styles.scss'

const NavRigthEvent = (props) => {
  const openBtn = props.isOpen
  const [showModal, setShowModal] = useState(false)
  const openModal = () => {
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)
  }
  function handleLogout () {
    window.sessionStorage.removeItem('myData')
    window.location.replace('/')
  }
  return (
    <ul className={
      openBtn
        ? 'NavRigth'
        : 'NavRigth-open'
    }
    >
      <li>
        <Link to='/Dashboard'>Inicio</Link>
      </li>
      <li>
        <Link to='/dashboard/NewEvent'>Nuevo evento</Link>
      </li>
      <li>
        <Link to='/CalendarPage'>Calendario</Link>
      </li>
      <li>
        <button onClick={openModal}>Cerrar sesión</button>
      </li>
      <ModalAction
        isOpen={showModal}
        handleCloseModal={closeModal}
        handleAction={handleLogout}
        nameAction='Salir'
      />
    </ul>
  )
}

export default NavRigthEvent
