import React, { useState, useEffect } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { newEventRequest, setRedirectUrl, setUserStatus } from '../../actions'
import Layout from '../../components/Layout'
import ModalState from '../../components/ModalState'

import _template1 from '../../assets/images/PreviewPlantilla1.png'
import _template2 from '../../assets/images/PreviewPlantilla2.png'
import ModalPreview from '../../components/ModalPreview'

import './styles.scss'

const NewEvent = props => {
  const [inputValues, setInputValues] = useState({})
  const [status, setStatus] = useState()
  const organizationName = 'Starlink'
  const { userStatus } = props
  const handleSubmit = async evn => {
    evn.preventDefault()
    const data = {
      name: inputValues.name,
      template: inputValues.template,
      url: inputValues.name.replace(/ /g, '-'),
      startDate: String(new Date(inputValues.startDate)),
      organizationName: inputValues.organizationName
    }
    await props.newEventRequest(data, '/dashboard')
  }
  useEffect(() => {
    if (userStatus === 'error') {
      setStatus({ error: 'Ups! parece que hubo un error' })
    }
    if (userStatus === 'success') {
      setUserStatus('idle')
    }
  }, [userStatus])

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
  const [showModal, setShowModal] = useState(false)
  const openModal = () => {
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)
  }
  const [showModalDos, setShowModalDos] = useState(false)
  const openModalDos = () => {
    setShowModalDos(true)
  }
  const closeModalDos = () => {
    setShowModalDos(false)
  }
  if (props.redirect) {
    props.setRedirectUrl(null)
    return (
      <Redirect
        to={`/dashboard/${organizationName}/${props.redirect}/edit/info`}
      />
    )
  }
  return (
    <>
      <Layout active='new'>
        <div className='NewEvent'>
          <h2>Crear Evento</h2>
          <div className='NewEvent-container'>
            <h2>Crea un nuevo evento</h2>
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
                      <option value='DEFAULT' disabled />
                      {props.organizationsList &&
                        props.organizationsList.map((o, index) => (
                          <option key={index} value={o.organizationName}>
                            {o.organizationName}
                          </option>
                        ))}
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
                      Fecha de inicio del evento
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
                </div>
                <div className='formEdit-container-formRigth'>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>
                      Elije una plantilla para tu evento
                    </label>
                    <div className='formEdit-field__fileDos'>
                      <div className='formEdit-container'>
                        <div className='formEdit-container-formTemplate'>
                          <button
                            className={
                              inputValues.template === 't02'
                                ? ''
                                : 'template-button'
                            }
                            type='button'
                            onClick={handleClick}
                            name='template'
                            value='t02'
                          >
                            <h2>Coral</h2>
                          </button>
                          <h4>Paleta de color</h4>
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
                          <Link onClick={openModal}>
                            <h5>Vista Previa</h5>
                          </Link>
                          <ModalPreview
                            isOpen={showModal}
                            handleAction={closeModal}
                            image={_template1}
                            nameAction='cerrar'
                          />
                        </div>
                        <div className='formEdit-container-formTemplate'>
                          <button
                            className={
                              inputValues.template === 't01'
                                ? ''
                                : 'template-button'
                            }
                            type='button'
                            onClick={handleClick}
                            name='template'
                            value='t01'
                          >
                            <h2>Lusiana</h2>
                          </button>
                          <h4>Paleta de color</h4>
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
                          <Link onClick={openModalDos}>
                            <h5>Vista Previa</h5>
                          </Link>
                          <ModalPreview
                            isOpen={showModalDos}
                            handleAction={closeModalDos}
                            image={_template2}
                            nameAction='cerrar'
                          />
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
      {status && (
        <ModalState
          isOpen
          handleAction={() => {
            setUserStatus('idle')
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
const mapDispatchToProps = {
  newEventRequest,
  setRedirectUrl,
  setUserStatus
}
const mapStateToProps = s => ({
  organizationsList: s.user.data.organizations,
  eventId: s.editEvent.eventId,
  redirect: s.redirect,
  user: s.user,
  userStatus: s.user.status
})
export default connect(mapStateToProps, mapDispatchToProps)(NewEvent)
