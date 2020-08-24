import React from 'react'
import { Link } from 'react-router-dom'
import _logo from '../../../../../assets/images/logo-white.svg'
import styles from './styles.module.scss'
const Header = props => {
  return (
    <>
      <div className={styles['header']}>
        <div className={styles['header__container']}>
          <div className={styles['header__left']}>
            <div className={styles['header__logo']}>
              <img src={_logo} alt="Logotipo" />
            </div>
          </div>
          <div className={styles['header__right']}>
            <ul>
              <Link to="/">Inicio</Link>
              <Link to="/dashboard">Que es</Link>
              <Link to="/events">Conferencistas</Link>
              <li>
                <Link to="/login">
                  <button className="button button-templates">Login</button>
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
