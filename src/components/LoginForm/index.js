/* Issue: when a input field is selected by tabs */
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { loginRequest } from '../../actions'
import { useHistory } from 'react-router-dom'
const LoginForm = props => {
  const [inputValues, setInputValues] = useState({})
  const handleSubmit = evn => {
    evn.preventDefault()
    const form = {
      email: inputValues.email,
      password: inputValues.password
    }
    props.loginRequest(form, '/dashboard')
  }

  const history = useHistory()
  useEffect(() => {
    if (props.redirectTo) {
      history.push(props.redirectTo)
    }
  })

  const handleFocus = evn => {
    const formField = evn.currentTarget.parentNode
    const activeLabel = formField.getElementsByTagName('label')[0]
    activeLabel.classList.add('form-field__label--active')
    formField.classList.add('form-field--active')
  }
  const handleChange = evn => {
    const fieldName = evn.target.name
    const fieldValue = evn.target.value
    setInputValues({ ...inputValues, [fieldName]: fieldValue })
  }
  const handleBur = evn => {
    const field = evn.currentTarget
    const label = field.getElementsByTagName('label')[0]
    const input = field.getElementsByTagName('input')[0]
    const isFill = input.value
    if (!isFill) {
      label.classList.remove('form-field__label--active')
      field.classList.remove('form-field--active')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div onBlur={handleBur} className='form-field'>
          <label className='form-field__label'>Email</label>
          <input
            onFocus={handleFocus}
            onChange={handleChange}
            type='email'
            name='email'
          />
        </div>
        <div onBlur={handleBur} className='form-field'>
          <label className='form-field__label'>Contraseña</label>
          <input
            onFocus={handleFocus}
            onChange={handleChange}
            type='password'
            name='password'
          />
        </div>
        <div className='login__button'>
          <button className='button' type='submit'>
            Login
          </button>
        </div>
        {props.loginError && (
          <div className='form-field__error'>{props.loginError}</div>
        )}
      </form>
    </>
  )
}
const mapDispatchToProps = {
  loginRequest
}
const mapStateToProps = state => ({
  redirectTo: state.redirectTo,
  loginError: state.user.error.loginError
})
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
