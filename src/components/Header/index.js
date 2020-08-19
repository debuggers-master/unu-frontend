import React from 'react'
import _logo from '../../assets/images/logo-white.svg'
import './styles.scss'
const Header = () => {
  return (
    <>
      <div className='header'>
        <div className='header__left'>
          <img src={_logo} alt='Logotipo' />
        </div>
        <div className='header__right'>
          <ul>
            <li>Inicio</li>
            <li>Proceso</li>
            <li>Equipo</li>
            <li>
              <button className='button button--shape'>Login</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
export default Header
