import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { setEditEventStatus, updateEventInfoRequest } from '../../actions'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'
import _plus from '../..//assets/images/iconPlus.svg'
import './styles.scss'
import ModalState from '../../components/ModalState'
import Loader from '../../components/Loader'
const FileReader = window.FileReader

const EditInfo = props => {
  const { eventId, organizationName } = props.match.params
  const { editEventStatus, setEditEventStatus } = props
  const [inputValues, setInputValues] = useState({})
  const [status, setStatus] = useState()
  const [loader, setLoader] = useState(null)
  const headerImg = useRef(null)
  const eventImg = useRef(null)
  const img = {
    imageHeader: headerImg,
    imageEvent: eventImg
  }

  useEffect(() => {
    if (editEventStatus === 'error') {
      setStatus({ error: 'Ups! parece que hubo un error' })
      setLoader(false)
    }
    if (editEventStatus === 'loading') {
      setLoader(true)
    }
    if (editEventStatus === 'success') {
      setStatus({ success: 'Modificado Exitosamente' })
      setLoader(false)
      setEditEventStatus('idle')
    }
  }, [editEventStatus, setEditEventStatus])

  useEffect(() => {
    const data = props.eventData
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
  }, [props.eventData])

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
    props.updateEventInfoRequest({
      eventId,
      eventData
    })
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
          handleAction={() => {
            props.setEditEventStatus(null)
            setStatus(null)
          }}
          nameAction='Entendido'
          messageModal={status.error ? status.error : status.success}
          stateModal={status.error ? 'check' : 'cross'}
        />
      )}
    </>
  )
}

const mapStateToProps = state => {
  return {
    eventData: state.editEvent.data,
    editEventStatus: state.editEvent.status,
    userError: state.user.error.userError
  }
}
const mapDispatchToProps = {
  setEditEventStatus,
  updateEventInfoRequest
}
export default connect(mapStateToProps, mapDispatchToProps)(EditInfo)
