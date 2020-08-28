import React, { useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import getCookie from '../../utils/getCookie'
import { API_URL } from '../../config.js'
import { createEvent } from '../../actions'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'

import './styles.scss'

const NewEvent = props => {
  const [inputValues, setInputValues] = useState({})
  const organizationName = 'Starlink'
  const handleSubmit = async evn => {
    evn.preventDefault()
    const data = {
      name: inputValues.name,
      template: inputValues.template,
      url: inputValues.url,
      startDate: String(new Date(inputValues.startDate)),
      organizationName: inputValues.organizationName
    }
    try {
      const res = await axios(`${API_URL}/api/v1/events`, {
        headers: { Authorization: `Bearer ${getCookie('token')}` },
        data,
        method: 'POST'
      })
      console.log('creado Exitosamente')
      props.createEvent({
        eventId: res.data.eventId,
        name: data.name,
        organizationName: data.organizationName
      })
      window.location.href = `/dashboard/${organizationName}/${res.data.eventId}/edit/info`
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = evn => {
    const fieldName = evn.target.name
    const fieldValue = evn.target.value
    setInputValues({ ...inputValues, [fieldName]: fieldValue })
  }
  const handleClick = evn => {
    const fieldName = evn.currentTarget.name
    const fieldValue = evn.currentTarget.value
    console.log(fieldName, fieldValue)
    setInputValues({ ...inputValues, [fieldName]: fieldValue })
  }
  return (
    <>
      <Layout active='new'>
        <div className='NewEvent'>
          <h2>Crear Evento</h2>
          <div className='NewEvent-container'>
            <h2>Cra un nuevo evento</h2>
            <form onSubmit={handleSubmit}>
              <div className='formEdit-container'>
                <div className='formEdit-container-formLeft'>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>
                      ¿Cúal organización hará el evento?
                    </label>
                    <select
                      onChange={handleChange}
                      name='organizationName'
                      className='formEdit-field__select'
                      defaultValue='DEFAULT'
                    >
                      <option value='DEFAULT' />
                      <option value='Starlink'>Starlink</option>
                    </select>
                  </div>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>
                      Nombre del evento
                    </label>
                    <input
                      name='name'
                      onChange={handleChange}
                      value={inputValues.name || ''}
                      type='text'
                      className='formEdit-field__input'
                    />
                  </div>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label' htmlFor='start'>
                      Fecha inicio del evento
                    </label>
                    <input
                      onChange={handleChange}
                      name='startDate'
                      className='formEdit-field__select'
                      type='date'
                      min='2020-08-01'
                      max='2022-12-31'
                    />
                  </div>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>
                      Personaliza la URL de tu evento
                    </label>
                    <input
                      onChange={handleChange}
                      name='url'
                      type='text'
                      className='formEdit-field__input'
                    />
                  </div>
                </div>
                <div className='formEdit-container-formRigth'>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>
                      Elije una plantilla para tu evento
                    </label>
                    <div className='formEdit-field__fileDos'>
                      <div className='formEdit-container'>
                        <div className='formEdit-content'>
                          <button
                            type='button'
                            onClick={handleClick}
                            name='template'
                            value='t01'
                          >
                            <h2>Plantilla 1</h2>
                          </button>
                          <h4>Palegta de color</h4>
                          <div className='paletColor-container'>
                            <div className='paletColor-uno' />
                            <div className='paletColor-dos' />
                            <div className='paletColor-tres' />
                          </div>
                          <h4>Tipografía</h4>
                          <div className='typography'>
                            <p className='typography-NotoSans'>Noto Sans JP</p>
                            <div className='typography-line' />
                            <p className='typography-OpenSans'>Open Sans</p>
                          </div>
                          <h5>Preview Plantilla 1</h5>
                        </div>
                        <div className='formEdit-content'>
                          <button
                            type='button'
                            onClick={handleClick}
                            name='template'
                            value='t02'
                          >
                            <h2>Plantilla 2</h2>
                          </button>
                          <h4>Palegta de color</h4>
                          <div className='paletColor-container'>
                            <div className='paletColor-cuatro' />
                            <div className='paletColor-cinco' />
                            <div className='paletColor-seis' />
                          </div>
                          <h4>Tipografía</h4>
                          <div className='typography'>
                            <p className='typography-Raleway'>Raleway</p>
                            <div className='typography-line' />
                            <p className='typography-Roboto'>Roboto</p>
                          </div>
                          <Link to='#'>
                            <h5>Preview Plantilla 2</h5>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='check-action'>
                <Link to='/events/edit/organizationName/eventId'>
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
      </Layout>
    </>
  )
}
const mapDispatchToProps = {
  createEvent
}
export default connect(null, mapDispatchToProps)(NewEvent)
