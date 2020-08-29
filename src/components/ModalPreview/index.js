import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './styles.scss'

function ModalPreview (props) {
  const { nameAction, handleAction, image } = props
  const modalNode = document.getElementById('modal')
  const modal = document.createElement('div')
  useEffect(() => {
    modalNode.appendChild(modal)
  }, [modal, modalNode])

  if (props.isOpen) {
    return ReactDOM.createPortal(
      <>
        <div className='ModalPreview'>
          <div className='ModalPreview-container'>
            <img src={image} alt='imagen ilustrativa de la plantilla' />
            <div className='check-action'>
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

export default ModalPreview
