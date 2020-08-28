import React, { useState } from 'react'
import '../../../main.scss'
import styles from './styles.module.scss'
import RegisterForm from './RegisterForm'
import Modal from '../Modal'

const Footer = props => {
  const [showModal, setShowModal] = useState(false)
  const openModal = () => {
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)
  }
  const footerClassName = `${styles['footer-templates']} section`
  return (
    <footer className={footerClassName}>
      <div className={styles['footer-templates__container']}>
        <div className={styles['footer-templates__left']}>
          <div className={styles['footer-templates__title']}>
            <div>Registrate a este evento</div>
            <div>Nosotros te recordaremos un dia antes via email</div>
          </div>
        </div>
        <div className={styles['footer-templates__right']}>
          <div className={styles['footer-template__form']}>
            <RegisterForm openModal={openModal} />
          </div>
        </div>
      </div>
      <Modal url={props.url} isOpen={showModal} handleCloseModal={closeModal} />
    </footer>
  )
}
export default Footer
