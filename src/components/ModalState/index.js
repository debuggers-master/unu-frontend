import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import CheckAnimation from '../CheckAnimation'
import CrossAnimation from '../CrossAnimation'
import './styles.scss'

function ModalState (props) {
  const { nameAction, handleAction, messageModal, stateModal } = props
  const modalNode = document.getElementById('modal')
  const modal = document.createElement('div')
  useEffect(() => {
    modalNode.appendChild(modal)
  }, [modal, modalNode])

  const isFatal = (stateModal === 'cross')

  if (props.isOpen) {
    return ReactDOM.createPortal(
      <>
        <div className='Modal'>
          <div className='Modal-container'>
            {isFatal
              ? <CheckAnimation />
              : <CrossAnimation />}
            <h4>{messageModal}</h4>
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

export default ModalState
