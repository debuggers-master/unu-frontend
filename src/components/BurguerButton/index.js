import React, { useState } from 'react'
import NavRigth from '../NavRigth'
import NavRigthEvent from '../NavRigthEvent'
import NavRigthUser from '../NavRigthUser'
import './styles.scss'

const BurguerButton = ({ typeOf }) => {
  const [showMenu, setShowMenu] = useState(true)
  const openModal = () => {
    setShowMenu(false)
  }
  const closeModal = () => {
    setShowMenu(true)
  }
  const changeStatus = () => {
    if (showMenu === true) {
      openModal()
    } else {
      closeModal()
    }
  }

  const handleType = (typeOf) => {
    if (typeOf === 'user') {
      return <NavRigthUser isOpen={showMenu} />
    }
    if (typeOf === 'event') {
      return <NavRigthEvent isOpen={showMenu} />
    } else {
      return <NavRigth isOpen={showMenu} />
    }
  }
  return (
    <>
      <div
        className={showMenu ? 'Burguer' : 'Burguer-open'}
        onClick={changeStatus}
      >
        <div />
        <div />
        <div />
      </div>
      {handleType(typeOf)}
    </>
  )
}

export default BurguerButton
