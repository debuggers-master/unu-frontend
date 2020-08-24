import React from 'react'
import '../../../main.scss'
import styles from './styles.module.scss'
import RegisterForm from './RegisterForm'
const Footer = props => {
  return (
    <footer className={styles['footer-templates section']}>
      <div className={styles['footer-templates__container']}>
        <div className={styles['footer-templates__left']}>
          <div className={styles['footer-templates__title']}>
            <div>Registrate a este evento</div>
            <div>Nosotros te recordaremos un dia antes via email</div>
          </div>
        </div>
        <div className={styles['footer-templates__right']}>
          <div className={styles['footer-template__form']}>
            <RegisterForm />
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
