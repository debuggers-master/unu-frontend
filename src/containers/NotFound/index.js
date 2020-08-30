import React from 'react'
import { Link } from 'react-router-dom'
import _logo from '../../assets/images/logo-white.svg'
import './styles.scss'

function NotFound () {
  return (
    <>
      <div className='NotFound'>
        <div className='NotFound-container'>
          <img src={_logo} alt='Logo de Unu' />
          <h4>404: not Found
            <span role='img' aria-label='sad'>
              😓
            </span>
          </h4>
          <div className='check-action'>
            <Link type='submit' className='check-action__btnRight' to='/'>
              <p>Inicio</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound
