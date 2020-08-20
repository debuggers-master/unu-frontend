/* Issue: when a input field is selected by tabs */
/* Issue: must be delete add event listeners into if statement from handleOutisdeClick */
import React, { useState, useEffect } from 'react'

const Form = () => {
  const [modifiedFields, setModifiedFields] = useState({})
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    name: ''
  })
  const [enableSubmit, setEnableSubmit] = useState()
  const handleClick = evn => {
    const formField = evn.currentTarget
    const activeLabel = formField.getElementsByTagName('label')[0]
    activeLabel.classList.add('form-field__label--active')
    formField.classList.add('form-field--active')
  }
  const handleChange = evn => {
    const fieldName = evn.target.name
    const fieldValue = evn.target.value
    console.log(fieldName)
    setModifiedFields({ ...modifiedFields, [fieldName]: fieldValue })
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
    validateFields(modifiedFields)
  }
  const handleSubmit = () => {}
  const validateFields = fields => {
    const validators = {
      email: emailValidator,
      name: nameValidator,
      lastName: nameValidator,
      password: passwordValidator,
      passwordConfirm: passwordConfirmValidator
    }
    for (const type in fields) {
      const value = fields[type]
      if (validators[type]) {
        const fieldError = validators[type](value)
        setErrors({ ...errors, [type]: fieldError })
      }
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
  const emailValidator = email => {
    if (/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/.test(email)) {
      return null
    }
    if (email.trim() === '') {
      return 'Ingresa un email'
    }
    return 'Ingresa un email valido'
  }
  const nameValidator = name => {
    if (name.trim() === '') {
      return 'Ingresa un nombre'
    }
    return null
  }
  const passwordValidator = password => {
    if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)) {
      return null
    }
    if (password.trim() === '') {
      return 'Ingresa una contraseña'
    }
    return 'Ingresa una contraseña correcta'
  }
  const passwordConfirmValidator = pass => {
    if (pass === modifiedFields.password) {
      return null
    }
    return 'Las contraseñas no son iguales'
  }
  return (
    <>
      <form onSubmit={handleSubmit} autoComplete='off'>
        <div onBlur={handleBur} onClick={handleClick} className='form-field'>
          <label className='form-field__label'>Nombre</label>
          <input onChange={handleChange} type='text' name='name' />
          {errors.name && (
            <div className='form-field__error'>{errors.name}</div>
          )}
        </div>
        <div onBlur={handleBur} onClick={handleClick} className='form-field'>
          <label className='form-field__label'>Apellido</label>
          <input onChange={handleChange} type='text' name='lastName' />
          {errors.lastName && (
            <div className='form-field__error'>{errors.lastName}</div>
          )}
        </div>

        <div
          onBlur={handleBur}
          onClick={handleClick}
          className={
            errors.email ? 'form-field form-field--error' : 'form-field'
          }
        >
          <label className='form-field__label'>Email</label>
          <input onChange={handleChange} type='text' name='email' />
          {errors.email && (
            <div className='form-field__error'>{errors.email}</div>
          )}
        </div>
        <div onBlur={handleBur} onClick={handleClick} className='form-field'>
          <label className='form-field__label'>Contraseña</label>
          <input onChange={handleChange} type='password' name='password' />
          {errors.password && (
            <div className='form-field__error'>{errors.password}</div>
          )}
        </div>
        <div onBlur={handleBur} onClick={handleClick} className='form-field'>
          <label className='form-field__label'>Confirmar Contraseña</label>
          <input
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
      </form>
    </>
  )
}
export default Form
