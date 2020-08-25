import React from 'react'
import { Link } from 'react-router-dom'
import _logo from '../../../../../assets/images/logo-white.svg'
import styles from './styles.module.scss'
import stylesTemplate from '../../styles.module.scss'

const buttonClassName = `button ${stylesTemplate['button-templates']}`

const Header = props => {
  const { handleClick } = props
  return (
    <>
      <div className={styles.header}>
        <div className={styles.header__container}>
          <div className={styles.header__left}>
            <div className={styles.header__logo}>
              <img src={_logo} alt='Logotipo' />
            </div>
          </div>
          <div className={styles.header__right}>
            <ul>
              <button className={styles.header__link} onClick={handleClick}>
                Inicio
              </button>
              <button className={styles.header__link} onClick={handleClick}>
                Que es?
              </button>
              <button className={styles.header__link} onClick={handleClick}>
                Agenda
              </button>
              <li>
                <Link to='/login'>
                  <button className={buttonClassName}>Inscribete</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
export default Header
