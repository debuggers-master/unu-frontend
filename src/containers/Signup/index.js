import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'
import _logo from '../../assets/images/logo-white.svg'
import _close from '../../assets/images/close-button.svg'
import Form from '../../components/SignupForm'
const Signup = () => {
  return (
    <div className='getStarted-grid'>
      <div className='signup'>
        <Link to='/' className='signup__close'>
          <img src={_close} alt='cerrar' />
        </Link>
        <div className='signup__banner'>
          <img src={_logo} alt='Logotipo' />
          <h3>Start making awesome websites</h3>
          <span> Simple, easy, and beautiful</span>
        </div>
        <div className='signup__form'>
          <h1>Sign Up</h1>
          <h2>Comienza a diseñar tu proximo evento</h2>
          <Form />
          <div className='signup__signed-caption'>
            <span>Ya estas registrado? </span>
            <Link to='/login'> Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
