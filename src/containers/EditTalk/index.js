import React, { useState, useEffect, useRef } from 'react'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  updateTalkRequest,
  addTalkRequest,
  setEditEventStatus
} from '../../actions'
import _plus from '../..//assets/images/iconPlus.svg'
import './styles.scss'
import ModalState from '../../components/ModalState'
import Loader from '../../components/Loader'

const FileReader = window.FileReader

const EditTalk = props => {
  const { conferenceId, organizationName, eventId, dayId } = props.match.params
  const { agenda } = props
  const date = new Date(props.location.state.date)
  const [inputValues, setInputValues] = useState({})
  const [status, setStatus] = useState()
  const [loader, setLoader] = useState(conferenceId) // If must retrieve info on mount, set Loader true

  const speakerImg = useRef(null)

  const img = {
    speakerPhoto: speakerImg
  }

  useEffect(() => {
    function getTalk () {
      try {
        const dayData = agenda.filter(day => day.dayId === dayId).shift()
        const talkData = dayData.conferences
          .filter(conf => conf.conferenceId === conferenceId)
          .shift()
        setInputValues(talkData)
      } catch (error) {
        setStatus({ error: 'Ups parece que hubo un error' })
      }
    }
    conferenceId && getTalk()
  }, [agenda, conferenceId, dayId])

  useEffect(() => {
    if (props.editEventStatus === 'error') {
      setStatus({ error: 'Ups! parece que hubo un error' })
    }
    if (props.editEventStatus === 'success') {
      setStatus({ success: 'Modificado Exitosamente' })
    }
  }, [props.editEventStatus])

  const handleChange = evn => {
    const fieldName = evn.target.name
    const fieldValue = evn.target.value
    setInputValues({ ...inputValues, [fieldName]: fieldValue })
  }
  const handleUpload = async evn => {
    setLoader(true)
    const fieldName = evn.target.name
    const fr = new FileReader()
    fr.onload = evn => {
      setInputValues({ ...inputValues, [fieldName]: fr.result })
      img[fieldName].current.style.backgroundImage = `url(${fr.result})`
      setLoader(false)
    }
    fr.readAsDataURL(evn.target.files[0])
  }

  const handleSubmit = async evn => {
    setLoader(true)
    evn.preventDefault()
    const endHour = date.setHours(inputValues.endHour)
    const startHour = date.setHours(inputValues.startHour)
    const conferenceData = {
      conferenceId: conferenceId ? inputValues.conferenceId : null,
      description: inputValues.description,
      endHour: String(new Date(endHour)),
      name: inputValues.name,
      rol: inputValues.rol,
      speakerBio: inputValues.speakerBio,
      speakerId: conferenceId ? inputValues.conferenceId : null,
      speakerName: inputValues.speakerName,
      speakerPhoto: inputValues.speakerPhoto,
      startHour: String(new Date(startHour)),
      twitter: inputValues.twitter
    }

    if (conferenceId) {
      props.updateTalkRequest({
        eventId,
        dayId,
        conferenceData
      })
    } else {
      props.addTalkRequest({
        eventId,
        dayId,
        conferenceData
      })
    }
  }

  return (
    <>
      <Layout active='home'>
        <div className='editTalk'>
          <h2>{organizationName}</h2>
          {loader && <Loader />}
          <div className='editTalk-container'>
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
                      <div ref={speakerImg} className='formEdit-field__file'>
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
                          <option value='1'>1:00 am</option>
                          <option value='2'>2:00 am</option>
                          <option value='3'>3:00 am</option>
                          <option value='4'>4:00 am</option>
                          <option value='5'>5:00 am</option>
                          <option value='6'>6:00 am</option>
                          <option value='7'>7:00 am</option>
                          <option value='8'>8:00 am</option>
                          <option value='9'>9:00 am</option>
                          <option value='10'>10:00 am</option>
                          <option value='11'>11:00 am</option>
                          <option value='12'>12:00 pm</option>
                          <option value='13'>1:00 pm</option>
                          <option value='14'>2:00 pm</option>
                          <option value='15'>3:00 pm</option>
                          <option value='16'>4:00 pm</option>
                          <option value='17'>5:00 pm</option>
                          <option value='18'>6:00 pm</option>
                          <option value='19'>7:00 pm</option>
                          <option value='20'>8:00 pm</option>
                          <option value='21'>9:00 pm</option>
                          <option value='22'>10:00 pm</option>
                          <option value='23'>11:00 pm</option>
                          <option value='0'>12:00 am</option>
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
                          <option value='1'>1:00 am</option>
                          <option value='2'>2:00 am</option>
                          <option value='3'>3:00 am</option>
                          <option value='4'>4:00 am</option>
                          <option value='5'>5:00 am</option>
                          <option value='6'>6:00 am</option>
                          <option value='7'>7:00 am</option>
                          <option value='8'>8:00 am</option>
                          <option value='9'>9:00 am</option>
                          <option value='10'>10:00 am</option>
                          <option value='11'>11:00 am</option>
                          <option value='12'>12:00 pm</option>
                          <option value='13'>1:00 pm</option>
                          <option value='14'>2:00 pm</option>
                          <option value='15'>3:00 pm</option>
                          <option value='16'>4:00 pm</option>
                          <option value='17'>5:00 pm</option>
                          <option value='18'>6:00 pm</option>
                          <option value='19'>7:00 pm</option>
                          <option value='20'>8:00 pm</option>
                          <option value='21'>9:00 pm</option>
                          <option value='22'>10:00 pm</option>
                          <option value='23'>11:00 pm</option>
                          <option value='0'>12:00 am</option>
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
      {status && (
        <ModalState
          isOpen
          handleAction={() => {
            props.setEditEventStatus('idle')
            setStatus(null)
          }}
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

const mapStateToProps = state => ({
  agenda: state.editEvent.data.agenda || [],
  editEventStatus: state.editEvent.status
})
const mapDispatchToProps = {
  setEditEventStatus,
  addTalkRequest,
  updateTalkRequest
}
export default connect(mapStateToProps, mapDispatchToProps)(EditTalk)
