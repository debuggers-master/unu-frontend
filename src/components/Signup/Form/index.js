/* Issue: when a input field is selected by tabs */
/* Issue: must be delete add event listeners into if statement from handleOutisdeClick */
import React, { useState, useEffect } from 'react'

const Form = () => {
  console.log('componente renderizado')

  const [clickedField, setClickedField] = useState()
  const [modifiedFields, setModifiedFields] = useState({})
  const [errors, setErrors] = useState({})

  const handleOutisdeClick = evn => {
    if (clickedField) {
      console.log('click')
      const label = clickedField.getElementsByTagName('label')[0]
      const input = clickedField.getElementsByTagName('input')[0]
      /* eslint-disable */
      const isInactive = evn.target != input
      /* eslint-enable */
      const isFill = input.value
      if (isInactive && !isFill) {
        label.classList.remove('form-field__label--active')
        validateFields(modifiedFields)
      }
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleOutisdeClick)
  }, [handleOutisdeClick])

  const handleClick = evn => {
    const formField = evn.currentTarget
    setClickedField(formField)
    const activeLabel = formField.getElementsByTagName('label')[0]
    activeLabel.classList.add('form-field__label--active')
  }
  const handleChange = evn => {
    console.log('handleChange')
    const fieldName = evn.target.name
    const fieldValue = evn.target.value
    setModifiedFields({ ...modifiedFields, [fieldName]: fieldValue })
  }

  const validateFields = fields => {
    const validators = {
      email: emailValidator
    }
    for (const type in fields) {
      const value = fields[type]
      if (validators[type]) {
        const fieldError = validators[type](value)
        setErrors({ ...errors, [type]: fieldError })
      }
    }
  }
  const emailValidator = email => {
    console.log(email)
    console.log('validando...')
    return 'tienes que poner un email'
  }
  return (
    <>
      <form>
        <div onClick={handleClick} className='form-field'>
          <label className='form-field__label'>Name</label>
          <input type='text' name='' />
        </div>
        <div onClick={handleClick} className='form-field'>
          <label className='form-field__label'>Last Name</label>
          <input type='text' name='' />
        </div>
        <div onClick={handleClick} className='form-field'>
          <label className='form-field__label'>Email</label>
          <input onChange={handleChange} type='text' name='email' />
          {errors.email && (
            <div className='form-field__error'>{errors.email}</div>
          )}
        </div>
        <div onClick={handleClick} className='form-field'>
          <label className='form-field__label'>Contraseña</label>
          <input type='text' name='' />
        </div>
        <div onClick={handleClick} className='form-field'>
          <label className='form-field__label'>Confirmar Contraseña</label>
          <input type='text' name='' />
        </div>
        <div className='signup__button'>
          <button className='button' type='submit'>
            Registrate
          </button>
        </div>
      </form>
    </>
  )
}
export default Form
