import React from 'react'
import { Link } from 'react-router-dom'
import _logo from '../../assets/images/logo-white.svg'
import './styles.scss'
const Header = props => {
  const containerClassName = `header ${props.styleType || ''}`
  const { handleClick } = props
  return (
    <>
      <div className={containerClassName}>
        <div className='header__container'>
          <div className='header__left'>
            <div className='header__logo'>
              <img src={_logo} alt='Logotipo' />
            </div>
          </div>
          <div className='header__right'>
            <ul>
              <Link to='/' onClick={handleClick}>Inicio</Link>
              <Link to='/' onClick={handleClick}>Equipo</Link>
              <Link to='/events'>Eventos</Link>
              <li>
                <Link to='/login'>
                  <button className='button button--shape'>Login</button>
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
