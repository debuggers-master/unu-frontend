import React, { useState, useEffect } from 'react'
import fieldValidator from '../../utils/formValidator'
import { registerRequest } from '../../actions'
import { connect } from 'react-redux'
const NewEventForm = props => {
  const [inputValues, setInputValues] = useState({})
  const [errors, setErrors] = useState({
    url: '',
    name: '',
    startDate: '',
    template: '',
    shortDescription: '',
    description: '',
    banner: '',
    organizationName: ''
  })
  const [enableSubmit, setEnableSubmit] = useState()

  const handleSubmit = evn => {
    evn.preventDefault()
    const form = {
      url: inputValues.url,
      name: inputValues.name,
      startDate: inputValues.startDate,
      template: inputValues.template,
      shortDescription: inputValues.shortDescription,
      description: inputValues.description,
      banner: inputValues.banner,
      organizationName: inputValues.organizationName
    }
    props.newEvent(form)
  }

  const handleFocus = evn => {
    const formField = evn.currentTarget.parentNode
    const activeLabel = formField.getElementsByTagName('label')[0]
    activeLabel.classList.add('formNewEventformNewEvent-field__label--active')
    formField.classList.add('formNewEventformNewEvent-field--active')
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
    console.log(fieldError)
    setErrors({ ...errors, [fieldName]: fieldError })
  }
  const handleBur = evn => {
    const field = evn.currentTarget
    const label = field.getElementsByTagName('label')[0]
    const input = field.getElementsByTagName('input')[0]
    const isFill = input.value
    if (!isFill) {
      label.classList.remove('formNewEvent-field__label--active')
      field.classList.remove('formNewEvent-field--active')
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
          <label className='formNewEvent-field__label'>Nombre</label>
          <input
            onFocus={handleFocus}
            onChange={handleChange}
            type='text'
            name='name'
          />
          {errors.name && (
            <div className='formNewEvent-field__error'>{errors.name}</div>
          )}
        </div>
        <div onBlur={handleBur} className='formNewEvent-field'>
          <label className='formNewEvent-field__label'>Apellido</label>
          <input
            onFocus={handleFocus}
            onChange={handleChange}
            type='text'
            name='lastName'
          />
          {errors.lastName && (
            <div className='formNewEvent-field__error'>{errors.lastName}</div>
          )}
        </div>

        <div
          onBlur={handleBur}
          className={
            errors.email
              ? 'formNewEvent-field formNewEvent-field--error'
              : 'formNewEvent-field'
          }
        >
          <label className='formNewEvent-field__label'>Email</label>
          <input
            onFocus={handleFocus}
            onChange={handleChange}
            type='text'
            name='email'
          />
          {errors.email && (
            <div className='formNewEvent-field__error'>{errors.email}</div>
          )}
        </div>
        <div onBlur={handleBur} className='formNewEvent-field'>
          <label className='formNewEvent-field__label'>Contraseña</label>
          <input
            onFocus={handleFocus}
            onChange={handleChange}
            type='name'
            name='password'
          />
          {errors.password && (
            <div className='formNewEvent-field__error'>{errors.password}</div>
          )}
        </div>
        <div onBlur={handleBur} className='formNewEvent-field'>
          <label className='formNewEvent-field__label'>
            Confirmar Contraseña
          </label>
          <input
            onFocus={handleFocus}
            onChange={handleChange}
            type='password'
            name='passwordConfirm'
          />
          {errors.passwordConfirm && (
            <div className='formNewEvent-field__error'>
              {errors.passwordConfirm}
            </div>
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
const mapDispatchToProps = {
  registerRequest
}
export default connect(null, mapDispatchToProps)(NewEventForm)
