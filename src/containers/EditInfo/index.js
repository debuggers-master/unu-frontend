import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import getCookie from '../../utils/getCookie'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'
import { API_URL } from '../../config.js'
import _plus from '../..//assets/images/iconPlus.svg'
import './styles.scss'
import ModalState from '../../components/ModalState'
import Loader from '../../containers/Loader'
const FileReader = window.FileReader

const EditInfo = props => {
  const { eventId, organizationName } = props.match.params
  const [inputValues, setInputValues] = useState({})
  const [status, setStatus] = useState()
  const [loader, setLoader] = useState(true)
  const headerImg = useRef(null)
  const eventImg = useRef(null)
  const img = {
    imageHeader: headerImg,
    imageEvent: eventImg
  }
  useEffect(() => {
    async function getEventInfo () {
      try {
        const { data } = await axios(`${API_URL}/api/v1/events`, {
          headers: { Authorization: `Bearer ${getCookie('token')}` },
          params: { eventId }
        })
        const values = {
          name: data.name,
          titleHeader: data.titleHeader,
          organizationName: data.organizationName,
          localTime: data.localTime,
          shortDescription: data.shortDescription,
          description: data.description,
          imageHeader: data.imageHeader,
          imageEvent: data.imageEvent
        }
        setInputValues(values)
        setLoader(false)
      } catch (error) {
        setStatus({ error: 'Parece que hubo un error :(' })
        setLoader(false)
        console.log(error)
      }
    }
    getEventInfo()
  }, [eventId])

  const handleUpload = async evn => {
    setLoader(true)
    const fieldName = evn.target.name
    const fr = new FileReader()
    fr.onload = evn => {
      setInputValues({ ...inputValues, [fieldName]: fr.result })
      setLoader(false)
      img[fieldName].current.style.backgroundImage = `url(${fr.result})`
    }
    fr.readAsDataURL(evn.target.files[0])
  }

  const handleChange = evn => {
    const fieldName = evn.target.name
    const fieldValue = evn.target.value
    setInputValues({ ...inputValues, [fieldName]: fieldValue })
  }
  const handleSubmit = async evn => {
    setLoader(true)
    evn.preventDefault()
    const eventData = {
      name: inputValues.name,
      titleHeader: inputValues.titleHeader,
      localTime: inputValues.localTime,
      shortDescription: inputValues.shortDescription,
      description: inputValues.description,
      imageHeader: inputValues.imageHeader,
      imageEvent: inputValues.imageEvent
    }
    console.log({
      data: {
        eventId,
        eventData
      }
    })
    try {
      await axios(`${API_URL}/api/v1/events`, {
        headers: { Authorization: `Bearer ${getCookie('token')}` },
        method: 'PUT',
        data: {
          eventId,
          eventData
        }
      })
      setStatus({ error: false })
      setLoader(false)
      console.log('Modificados exitosamente')
    } catch (error) {
      setStatus({ error: 'Ups parece que hubo un error' })
      setLoader(false)
    }
    // vaildate fields
    // send data to appState
  }

  return (
    <>
      <Layout active='home'>
        <div className='editInfo'>
          <h2>{organizationName}</h2>
          {loader && <Loader />}
          <div className='editInfo-container'>
            <h2>Editar informacion del evento</h2>
            <form onSubmit={handleSubmit}>
              <div className='formEdit-container'>
                <div className='formEdit-container-formLeft'>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>
                      Nombre del evento
                    </label>
                    <input
                      onChange={handleChange}
                      value={inputValues.name || ''}
                      type='text'
                      name='name'
                      className='formEdit-field__input'
                    />
                  </div>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>
                      Descripción corta del evento
                    </label>
                    <textarea
                      onChange={handleChange}
                      type='text'
                      value={inputValues.shortDescription || ''}
                      className='formEdit-field__textarea'
                      name='shortDescription'
                    />
                  </div>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>
                      Descripción del evento
                    </label>
                    <textarea
                      onChange={handleChange}
                      value={inputValues.description || ''}
                      type='text'
                      className='formEdit-field__textarea2'
                      name='description'
                    />
                  </div>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>
                      Zona horaria del evento
                    </label>
                    <select
                      onChange={handleChange}
                      name='localTime'
                      className='formEdit-field__select'
                      defaultValue={inputValues.localTime || 'DEFAULT'}
                    >
                      <option value='DEFAULT' disabled>
                        {inputValues.localTime || 'Seleccione UTC'}
                      </option>
                      <option value='UTC-11'>UTC-11</option>
                      <option value='UTC-10'>UTC-10</option>
                      <option value='UTC-9'>UTC-9</option>
                      <option value='UTC-8'>UTC-8</option>
                      <option value='UTC-7'>UTC-7</option>
                      <option value='UTC-6'>UTC-6</option>
                      <option value='UTC-5'>UTC-5</option>
                      <option value='UTC-4'>UTC-4</option>
                      <option value='UTC-3'>UTC-3</option>
                      <option value='UTC-2'>UTC-2</option>
                      <option value='UTC-1'>UTC-1</option>
                      <option value='UTC-0'>UTC-0</option>
                      <option value='UTC+1'>UTC+1</option>
                      <option value='UTC+2'>UTC+2</option>
                      <option value='UTC+3'>UTC+3</option>
                      <option value='UTC+4'>UTC+4</option>
                      <option value='UTC+5'>UTC+5</option>
                      <option value='UTC+6'>UTC+6</option>
                      <option value='UTC+7'>UTC+7</option>
                      <option value='UTC+8'>UTC+8</option>
                      <option value='UTC+9'>UTC+9</option>
                      <option value='UTC+10'>UTC+10</option>
                      <option value='UTC+11'>UTC+11</option>
                      <option value='UTC+12'>UTC+12</option>
                      <option value='UTC+13'>UTC+13</option>
                      <option value='UTC+14'>UTC+14</option>
                    </select>
                  </div>
                </div>
                <div className='formEdit-container-formRigth'>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>
                      Título principal
                    </label>
                    <input
                      onChange={handleChange}
                      name='titleHeader'
                      value={inputValues.titleHeader || ''}
                      type='text'
                      className='formEdit-field__input'
                    />
                  </div>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>
                      Imagen del Evento
                    </label>
                    <input
                      onChange={handleUpload}
                      name='imageEvent'
                      id='imgEvent'
                      type='file'
                    />
                    <div ref={eventImg} className='formEdit-field__file'>
                      <label
                        htmlFor='imgEvent'
                        className='formEdit-field__fileIcon'
                      >
                        <img
                          src={_plus}
                          alt='icono para subir imagen Cabecera'
                        />
                      </label>
                    </div>
                  </div>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>
                      Imagen de la Cabecera
                    </label>
                    <input
                      onChange={handleUpload}
                      name='imageHeader'
                      id='imgHeader'
                      type='file'
                    />
                    <div ref={headerImg} className='formEdit-field__file'>
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
                </div>
              </div>
              <div className='check-action'>
                <Link
                  to={`/dashboard/${inputValues.organizationName}/${eventId}/edit`}
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

export default EditInfo
