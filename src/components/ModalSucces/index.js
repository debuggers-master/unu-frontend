import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
// import { Link } from 'react-router-dom'
import CheckAnimation from '../CheckAnimation'
import './styles.scss'

function ModalSucces (props) {
  const { handleCloseModal, handleAction, nameAction } = props
  const modalNode = document.getElementById('modal')
  const modal = document.createElement('div')
  useEffect(() => {
    modalNode.appendChild(modal)
  }, [modal, modalNode])

  if (props.isOpen) {
    return ReactDOM.createPortal(
      <>
        <div className='Modal'>
          <div className='Modal-container'>
            <CheckAnimation />
            <div className='check-action'>
              <button type='submit' className='check-action__btnRight' onClick={handleCloseModal | handleAction}>
                <p>{nameAction}</p>
              </button>
            </div>
          </div>
        </div>
      </>,
      modal
    )
  }
  return <></>
}

export default ModalSucces
