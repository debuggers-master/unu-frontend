import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'
import axios from 'axios'
import getCookie from '../../utils/getCookie'
import { API_URL } from '../../config.js'
import _plus from '../..//assets/images/iconPlus.svg'
import './styles.scss'
const FileReader = window.FileReader
const EditTalk = props => {
  const { conferenceId, organizationName, eventId, dayId } = props.match.params
  const [inputValues, setInputValues] = useState({})

  useEffect(() => {
    async function getTalk () {
      try {
        const { data } = await axios(`${API_URL}/api/v1/events`, {
          params: {
            eventId,
            filters: 'agenda'
          }
        })
        const dayData = data.agenda.filter(day => day.dayId === dayId).shift()
        const talkData = dayData.conferences
          .filter(conf => conf.conferenceId === conferenceId)
          .shift()
        console.log(talkData)
        setInputValues(talkData)
      } catch (error) {
        console.log(error)
      }
    }
    conferenceId && getTalk()
  }, [conferenceId, dayId, eventId])

  const handleChange = evn => {
    const fieldName = evn.target.name
    const fieldValue = evn.target.value
    setInputValues({ ...inputValues, [fieldName]: fieldValue })
  }
  const handleUpload = async evn => {
    const fieldName = evn.target.name
    const fr = new FileReader()
    fr.onload = evn => {
      setInputValues({ ...inputValues, [fieldName]: fr.result })
    }
    fr.readAsDataURL(evn.target.files[0])
  }

  const handleSubmit = async evn => {
    evn.preventDefault()
    const conferenceData = {
      conferenceId: conferenceId ? inputValues.conferenceId : null,
      description: inputValues.description,
      endHour: inputValues.endHour,
      name: inputValues.name,
      rol: inputValues.rol,
      speakerBio: inputValues.speakerBio,
      speakerId: conferenceId ? inputValues.conferenceId : null,
      speakerName: inputValues.speakerName,
      speakerPhoto: inputValues.speakerPhoto,
      startHour: inputValues.startHour,
      twitter: inputValues.twitter
    }
    console.log({
      data: {
        eventId,
        dayId,
        conferenceData
      }
    })
    try {
      await axios(`${API_URL}/api/v1/events/conference`, {
        headers: { Authorization: `Bearer ${getCookie('token')}` },
        method: conferenceId ? 'PUT' : 'POST',
        data: {
          eventId,
          dayId,
          conferenceData
        }
      })
      console.log('Modificados exitosamente')
      window.location.href = `/dashboard/  ${organizationName}/${eventId}/edit/schedule/${dayId}`
    } catch (error) {
      console.log('ups parece que hubo un error')
    }
    // vaildate fields
    // send data to appState
  }

  return (
    <>
      <Layout active='home'>
        <div className='editInfo'>
          <h2>Stark Industries</h2>
          <div className='editInfo-container'>
            <h2>Editar Información General</h2>
            <form onSubmit={handleSubmit}>
              <div className='formEdit-container'>
                <div className='formEdit-container-formLeft'>
                  <h2>Editar Conferencia</h2>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>
                      Nombre de la conferencia
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
                    <label className='formEdit-field__label'>
                      Descripción de la conferencia
                    </label>
                    <textarea
                      onChange={handleChange}
                      name='description'
                      type='text'
                      value={inputValues.description || ''}
                      className='formEdit-field__textarea'
                    />
                  </div>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>
                      Nombre del Conferencista
                    </label>
                    <input
                      name='speakerName'
                      onChange={handleChange}
                      value={inputValues.speakerName || ''}
                      type='text'
                      className='formEdit-field__input'
                    />
                  </div>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>
                      Biografía del conferencista
                    </label>
                    <textarea
                      onChange={handleChange}
                      name='speakerBio'
                      type='text'
                      value={inputValues.speakerBio || ''}
                      className='formEdit-field__textarea'
                    />
                  </div>
                </div>
                <div className='formEdit-container-formRigth'>
                  <div className='formEdit-container'>
                    <div className='formEdit-field'>
                      <label className='formEdit-field__label'>
                        Foto del Conferencista
                      </label>
                      <input
                        name='speakerPhoto'
                        onChange={handleUpload}
                        id='imgHeader'
                        type='file'
                      />
                      <div className='formEdit-field__file'>
                        <label
                          htmlFor='imgHeader'
                          className='formEdit-field__fileIcon'
                        >
                          <img
                            src={_plus}
                            alt='icono para subir imagen Cabecera'
                          />
                        </label>
                      </div>
                    </div>
                    <div>
                      <div className='formEdit-field'>
                        <label className='formEdit-field__label'>
                          Hora inicial
                        </label>
                        <select
                          name='startHour'
                          onChange={handleChange}
                          className='formEdit-field__select'
                          defaultValue='DEFAULT'
                        >
                          <option value='DEFAULT' disabled>
                            Seleccionar Hora
                          </option>
                          <option value={1}>1:00</option>
                          <option value={2}>2:00</option>
                          <option value='3:00 am'>3:00 am</option>
                          <option value='4:00 am'>4:00 am</option>
                          <option value='5:00 am'>5:00 am</option>
                          <option value='6:00 am'>6:00 am</option>
                          <option value='7:00 am'>7:00 am</option>
                          <option value='8:00 am'>8:00 am</option>
                          <option value='9:00 am'>9:00 am</option>
                          <option value='10:00 am'>10:00 am</option>
                          <option value='11:00 am'>11:00 am</option>
                          <option value='12:00 am'>12:00 am</option>
                          <option value='1:00 pm'>1:00 pm</option>
                          <option value='2:00 pm'>2:00 pm</option>
                          <option value='3:00 pm'>3:00 pm</option>
                          <option value='4:00 pm'>4:00 pm</option>
                          <option value='5:00 pm'>5:00 pm</option>
                          <option value='6:00 pm'>6:00 pm</option>
                          <option value='7:00 pm'>7:00 pm</option>
                          <option value='8:00 pm'>8:00 pm</option>
                          <option value='9:00 pm'>9:00 pm</option>
                          <option value='10:00 pm'>10:00 pm</option>
                          <option value='11:00 pm'>11:00 pm</option>
                          <option value='12:00 pm'>12:00 pm</option>
                        </select>
                      </div>
                      <div className='formEdit-field'>
                        <label className='formEdit-field__label'>
                          Hora final
                        </label>
                        <select
                          name='endHour'
                          onChange={handleChange}
                          className='formEdit-field__select'
                          defaultValue='DEFAULT'
                        >
                          <option value='DEFAULT' disabled>
                            Seleccionar Hora
                          </option>
                          <option value='1:00 am'>1:00 am</option>
                          <option value='2:00 am'>2:00 am</option>
                          <option value='3:00 am'>3:00 am</option>
                          <option value='4:00 am'>4:00 am</option>
                          <option value='5:00 am'>5:00 am</option>
                          <option value='6:00 am'>6:00 am</option>
                          <option value='7:00 am'>7:00 am</option>
                          <option value='8:00 am'>8:00 am</option>
                          <option value='9:00 am'>9:00 am</option>
                          <option value='10:00 am'>10:00 am</option>
                          <option value='11:00 am'>11:00 am</option>
                          <option value='12:00 am'>12:00 am</option>
                          <option value='1:00 pm'>1:00 pm</option>
                          <option value='2:00 pm'>2:00 pm</option>
                          <option value='3:00 pm'>3:00 pm</option>
                          <option value='4:00 pm'>4:00 pm</option>
                          <option value='5:00 pm'>5:00 pm</option>
                          <option value='6:00 pm'>6:00 pm</option>
                          <option value='7:00 pm'>7:00 pm</option>
                          <option value='8:00 pm'>8:00 pm</option>
                          <option value='9:00 pm'>9:00 pm</option>
                          <option value='10:00 pm'>10:00 pm</option>
                          <option value='11:00 pm'>11:00 pm</option>
                          <option value='12:00 pm'>12:00 pm</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>
                      URL twitter del conferencista
                    </label>
                    <input
                      name='twitter'
                      onChange={handleChange}
                      value={inputValues.twitter || ''}
                      type='text'
                      className='formEdit-field__input'
                    />
                  </div>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>
                      Rol del conferencista
                    </label>
                    <input
                      name='rol'
                      onChange={handleChange}
                      value={inputValues.rol || ''}
                      type='text'
                      className='formEdit-field__input'
                    />
                  </div>
                </div>
              </div>
              <div className='check-action'>
                <Link
                  to={`/dashboard/  ${organizationName}/${eventId}/edit/schedule/${dayId}`}
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
      </Layout>
    </>
  )
}

export default EditTalk
