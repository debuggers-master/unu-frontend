import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'
import _close from '../../assets/images/close-button.svg'
import Form from '../../components/LoginForm'

const Login = () => {
  return (
    <div className='getStarted-grid'>
      <div className='login'>
        <Link to='/'>
          <img className='login__close' src={_close} alt='cerrar' />
        </Link>
        <div className='login__form'>
          <h1>Login</h1>
          <h2>Que piensas planear hoy?</h2>
          <Form />
          <div className='login__signed-caption'>
            <span>Aun no tienes cuenta? </span>
            <Link to='/signup'> Registrate</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login
