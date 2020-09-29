import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ApiService from '../../utils/ApiService'
import Layout from '../../components/Layout'
import ModalState from '../../components/ModalState'

import './styles.scss'

const EditDate = props => {
  const { organizationName, eventId, dayId } = props.match.params
  const [inputValues, setInputValues] = useState({ date: '2020-12-12' })
  const [status, setStatus] = useState()

  const handleSubmit = async evn => {
    evn.preventDefault()
    try {
      if (dayId) {
        ApiService.updateDay({
          eventId,
          dayData: {
            dayId,
            date: inputValues.date
          }
        })
      } else {
        ApiService.createDay({
          eventId,
          dayData: {
            dayId,
            date: inputValues.date
          }
        })
      }
      props.history.goBack()
    } catch (error) {
      console.log(error)
      setStatus({ error: 'Ups parece que hubo un error' })
    }
  }
  const handleChange = evn => {
    const fieldName = evn.target.name
    const fieldValue = evn.target.value
    setInputValues({ ...inputValues, [fieldName]: fieldValue })
  }

  return (
    <>
      <Layout active='home'>
        <div className='newDate'>
          <h2>Editar fecha día</h2>
          <div className='newDate-container'>
            <div className='newDate-container__card'>
              <form onSubmit={handleSubmit}>
                <div className='formEdit-field'>
                  <label className='formEdit-field__label'>
                    <h3>¿Qué dia quieres elegir?</h3>
                  </label>
                  <input
                    type='date'
                    id='start'
                    onChange={handleChange}
                    name='date'
                    className='formEdit-field__input'
                    defaultValue='2020-12-12'
                    min='2020-08-01'
                    max='2021-12-31'
                  />
                </div>
                <div className='check-action'>
                  <Link
                    to={`/dashboard/${organizationName}/${eventId}/edit/schedule`}
                  >
                    <button className='check-action__btnLeft'>
                      <p>Cancelar</p>
                    </button>
                  </Link>
                  <button type='submit' className='check-action__btnRight'>
                    <p>Guardar</p>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
      {status && (
        <ModalState
          isOpen
          handleAction={() => props.history.goBack()}
          nameAction='Entendido'
          messageModal={
            status.error ? status.error : 'Modificada exitosamente!'
          }
          stateModal={status.error ? 'check' : 'cross'}
        />
      )}
    </>
  )
}

export default EditDate
