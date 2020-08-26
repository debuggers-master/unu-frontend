import React, { useState, useEffect } from 'react'
import fieldValidator from '../../utils/formValidator'
import { registerUser } from '../../actions'
import { connect } from 'react-redux'
const SignupForm = props => {
  const [inputValues, setInputValues] = useState({})
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    name: '',
    lastName: '',
    passwordConfirm: ''
  })
  const [enableSubmit, setEnableSubmit] = useState()

  const handleSubmit = evn => {
    evn.preventDefault()
    const form = {
      email: inputValues.email,
      firstName: inputValues.name,
      lastName: inputValues.lastName,
      password: inputValues.password
    }
    props.registerUser(form, '/dashboard')
  }

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
    const fieldError = fieldValidator({
      field: fieldName,
      value: fieldValue,
      state: inputValues
    })
    setErrors({ ...errors, [fieldName]: fieldError })
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
  useEffect(() => {
    setEnableSubmit(formValidator(errors))
  }, [errors])

  const formValidator = errors => {
    for (const error in errors) {
      if (errors[error] !== null) {
        return false
      }
    }
    return true
  }
  return (
    <>
      <form onSubmit={handleSubmit} autoComplete='off'>
        <div onBlur={handleBur} className='form-field'>
          <label className='form-field__label'>Nombre</label>
          <input
            onFocus={handleFocus}
            onChange={handleChange}
            type='text'
            name='name'
          />
          {errors.name && (
            <div className='form-field__error'>{errors.name}</div>
          )}
        </div>
        <div onBlur={handleBur} className='form-field'>
          <label className='form-field__label'>Apellido</label>
          <input
            onFocus={handleFocus}
            onChange={handleChange}
            type='text'
            name='lastName'
          />
          {errors.lastName && (
            <div className='form-field__error'>{errors.lastName}</div>
          )}
        </div>

        <div
          onBlur={handleBur}
          className={
            errors.email ? 'form-field form-field--error' : 'form-field'
          }
        >
          <label className='form-field__label'>Email</label>
          <input
            onFocus={handleFocus}
            onChange={handleChange}
            type='text'
            name='email'
          />
          {errors.email && (
            <div className='form-field__error'>{errors.email}</div>
          )}
        </div>
        <div onBlur={handleBur} className='form-field'>
          <label className='form-field__label'>Contraseña</label>
          <input
            onFocus={handleFocus}
            onChange={handleChange}
            type='password'
            name='password'
          />
          {errors.password && (
            <div className='form-field__error'>{errors.password}</div>
          )}
        </div>
        <div onBlur={handleBur} className='form-field'>
          <label className='form-field__label'>Confirmar Contraseña</label>
          <input
            onFocus={handleFocus}
            onChange={handleChange}
            type='password'
            name='passwordConfirm'
          />
          {errors.passwordConfirm && (
            <div className='form-field__error'>{errors.passwordConfirm}</div>
          )}
        </div>
        <div className='signup__button'>
          <button
            disabled={!enableSubmit}
            className={enableSubmit ? 'button' : 'button button--disabled'}
            type='submit'
          >
            Registrate
          </button>
        </div>
        {props.signError && (
          <div className='form-field__error'>{props.signError}</div>
        )}
      </form>
    </>
  )
}
const mapDispatchToProps = {
  registerUser
}
const mapStateToProps = state => ({
  signError: state.errors.signError
})
export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)
