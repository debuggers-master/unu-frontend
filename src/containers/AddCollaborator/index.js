import React, { useState, useEffect } from 'react'
import fieldValidator from '../../utils/formValidator'
import axios from 'axios'
import getCookie from '../../utils/getCookie'
import { Link } from 'react-router-dom'
import { API_URL } from '../../config.js'
import './styles.scss'
import Layout from '../../components/Layout'

const AddCollaborator = props => {
  const { eventId } = props.match.params
  const [inputValues, setInputValues] = useState({})
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    name: '',
    lastName: '',
    passwordConfirm: ''
  })
  const [enableSubmit, setEnableSubmit] = useState()

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
  const handleSubmit = evn => {
    evn.preventDefault()
    const data = {
      eventId,
      collaboratorData: {
        email: inputValues.email,
        firstName: inputValues.name,
        lastName: inputValues.lastName,
        password: inputValues.password
      }
    }
    registerCollaborator(data, '/dashboard')
  }
  const registerCollaborator = async (data, redirectUrl) => {
    try {
      await axios(`${API_URL}/api/v1/events/collaborators`, {
        headers: { Authorization: `Bearer ${getCookie('token')}` },
        data,
        method: 'POST'
      })
      console.log('Colaborador creado exitosamente')
      window.location.href = `/dashboard/organizationName/${eventId}/edit/`
    } catch (error) {
      console.log(error)
    }
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
  return (
    <>
      <Layout active='home'>
        <div className='signCollaborator'>
          <div className='signCollaborator__container'>
            <h2>Registra un nuevo asociado</h2>
            <form onSubmit={handleSubmit}>
              <div className='formCollaborator-container'>
                <div className='signCollaborator-left'>
                  <div className='formCollaborator-field'>
                    <label className='formEdit-field__label'>
                      Nombre del Asociado
                    </label>
                    <input
                      onChange={handleChange}
                      value={inputValues.name || ''}
                      name='name'
                      type='text'
                      className='formEdit-field__input'
                    />
                    {errors.name && (
                      <div className='form-field__error'>{errors.name}</div>
                    )}
                  </div>
                  <div className='formCollaborator-field'>
                    <label className='formEdit-field__label'>Apellido</label>
                    <input
                      name='lastName'
                      value={inputValues.lastName || ''}
                      onChange={handleChange}
                      type='text'
                      className='formEdit-field__input'
                    />
                    {errors.lastName && (
                      <div className='form-field__error'>{errors.lastName}</div>
                    )}
                  </div>
                </div>
                <div className='formCollaborator-field'>
                  <label className='formEdit-field__label'>Email</label>
                  <input
                    name='email'
                    value={inputValues.email || ''}
                    onChange={handleChange}
                    type='email'
                    className='formEdit-field__input'
                  />
                  {errors.email && (
                    <div className='form-field__error'>{errors.email}</div>
                  )}
                </div>
                <div className='formCollaborator-field'>
                  <label className='formEdit-field__label'>Contraseña</label>
                  <input
                    name='password'
                    value={inputValues.password || ''}
                    onChange={handleChange}
                    type='password'
                    className='formEdit-field__input'
                  />
                  {errors.password && (
                    <div className='form-field__error'>{errors.password}</div>
                  )}
                </div>
                <div className='formCollaborator-field'>
                  <label className='formEdit-field__label'>
                    Confirmar Contraseña
                  </label>
                  <input
                    name='passwordConfirm'
                    value={inputValues.passwordConfirm || ''}
                    onChange={handleChange}
                    type='password'
                    className='formEdit-field__input'
                  />
                  {errors.passwordConfirm && (
                    <div className='form-field__error'>
                      {errors.passwordConfirm}
                    </div>
                  )}
                </div>
              </div>
              <div className='submit'>
                <Link to={`/dashboard/organizationName/${eventId}/edit/`}>
                  <button className='check-action__btnLeft'>
                    <p>Cancelar</p>
                  </button>
                </Link>
                <button
                  disabled={!enableSubmit}
                  className={
                    enableSubmit
                      ? 'buttonAddCollaborator'
                      : 'buttonAddCollaborator buttonAddCollaborator--disabled'
                  }
                  type='submit'
                >
                  <p>Guardar</p>
                </button>
              </div>

              {props.signError && (
                <div className='form-field__error'>{props.signError}</div>
              )}
            </form>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default AddCollaborator
