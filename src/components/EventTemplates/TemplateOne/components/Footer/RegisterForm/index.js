/* Issue: when a input field is selected by tabs */
import React, { useState } from 'react'

import axios from 'axios'
import { API_URL } from '../../../../../../config.js'
import stylesTemplate from '../../../styles.module.scss'

const buttonClassName = `button ${stylesTemplate['button-templates']}`

const RegisterForm = ({ eventId, openModal }) => {
  const [inputValues, setInputValues] = useState({})
  const handleSubmit = async evn => {
    evn.preventDefault()
    const form = {
      email: inputValues.email,
      eventId
    }
    try {
      axios(`${API_URL}/api/v1/participants`, {
        data: form,
        method: 'POST'
      })
    } catch (error) {
      console.log(error)
    }
    openModal()
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
          <label className='form-field__label'>Nombre</label>
          <input
            onFocus={handleFocus}
            onChange={handleChange}
            type='name'
            name='name'
          />
        </div>
        <div onBlur={handleBur} className='form-field'>
          <label className='form-field__label'>Apellido</label>
          <input
            onFocus={handleFocus}
            onChange={handleChange}
            type='name'
            name='lastName'
          />
        </div>
        <div onBlur={handleBur} className='form-field'>
          <label className='form-field__label'>Email</label>
          <input
            onFocus={handleFocus}
            onChange={handleChange}
            type='email'
            name='email'
          />
        </div>
        <div className='login__button'>
          <button className={buttonClassName} type='submit'>
            Registrate
          </button>
        </div>
      </form>
    </>
  )
}

export default RegisterForm
