import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import _close from '../../../../../assets/images/close-button.svg'
import _success from '../../../../../assets/images/success_t02.svg'

import styles from './styles.module.scss'

function Modal (props) {
  const { handleCloseModal } = props
  const modalNode = document.getElementById('modal')
  const modal = document.createElement('div')
  useEffect(() => {
    modalNode.appendChild(modal)
  }, [modal, modalNode])

  if (props.isOpen) {
    return ReactDOM.createPortal(
      <>
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <Link to={props.url} onClick={handleCloseModal}>
              <img className={styles.modal__close} src={_close} alt='cerrar' />
            </Link>
            <div className={styles.modal__container}>
              <div className={styles.modal__img}>
                <img src={_success} alt='registro exitoso' />
              </div>
              <h1>Registro Exitoso</h1>
              <h2>Recibiras un email antes que empieze el evento</h2>
            </div>
          </div>
        </div>
      </>,
      modal
    )
  }
  return <></>
}

export default Modal
// <div className={styles['modal']}>
//   <button onClick={props.closeModal}>CLOSE</button>
// </div>
