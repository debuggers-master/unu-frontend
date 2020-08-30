import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
// import { Link } from 'react-router-dom'
import './styles.scss'

function ModalAction (props) {
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
            <h2>¿Estas seguro que quieres realizar esta acción?</h2>
            <div className='check-action'>
              <button className='check-action__btnLeft' onClick={handleCloseModal}>
                <p>Cancelar</p>
              </button>
              <button type='submit' className='check-action__btnRight' onClick={handleAction}>
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

export default ModalAction
