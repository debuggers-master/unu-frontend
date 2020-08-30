import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import getCookie from '../../utils/getCookie'
import { Link } from 'react-router-dom'
import { API_URL } from '../../config.js'
import Layout from '../../components/Layout'
import ModalState from '../../components/ModalState'
import _plus from '../..//assets/images/iconPlus.svg'
import './styles.scss'
const FileReader = window.FileReader

const EmailInv = props => {
  const { eventId, organizationName } = props.match.params || {}
  const [status, setStatus] = useState()
  const [inputValues, setInputValues] = useState({})

  const emailImg = useRef(null)

  const img = {
    image: emailImg
  }

  const handleUpload = evn => {
    const fieldName = evn.target.name
    const fr = new FileReader()
    fr.onload = evn => {
      setInputValues({ ...inputValues, [fieldName]: fr.result })
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
    const emailData = new FormData()
    emailData.append('eventId', eventId)
    emailData.append('subject', inputValues.subject)
    emailData.append('message', inputValues.message)
    emailData.append('image', inputValues.image)
    try {
      await axios(`${API_URL}/api/v1/mails/special`, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${getCookie('token')}`
        },
        method: 'POST',
        data: emailData
      })
      console.log('Enviado exitosamente')
      setStatus({ error: false, success: 'Enviado Exitosamente' })
    } catch (error) {
      console.log(error)
      setStatus({ error: 'Ups parece que hubo un error' })
    }
  }
  const [showModal, setShowModal] = useState(false)
  const openModal = () => {
    setShowModal(true)
  }

  const GoBack = () => {
    window.history.back()
  }

  return (
    <>
      <Layout active='home'>
        <div className='editEmail'>
          <h2>{organizationName}</h2>
          <div className='editEmail-container'>
            <h2>Enviar mensaje a participantes</h2>
            <form onSubmit={handleSubmit}>
              <div className='formEdit-container'>
                <div className='formEdit-container-formLeft'>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>
                      Asunto del email
                    </label>
                    <input
                      onChange={handleChange}
                      value={inputValues.subject || ''}
                      name='subject'
                      type='text'
                      className='formEdit-field__input'
                    />
                  </div>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>
                      Escribe el mensaje
                    </label>
                    <textarea
                      onChange={handleChange}
                      value={inputValues.message || ''}
                      type='text'
                      className='formEdit-field__textarea2'
                      name='message'
                    />
                  </div>
                </div>
                <div className='formEdit-container-formRigth'>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>
                      Agrega una imagen (opcional)
                    </label>
                    <input
                      name='image'
                      onChange={handleUpload}
                      id='imgHeader'
                      type='file'
                    />
                    <div ref={emailImg} className='formEdit-field__file'>
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
                  to={`/dashboard/${inputValues.organizationName}/${eventId}/edit/`}
                >
                  <button className='check-action__btnLeft'>
                    <p>Cancelar</p>
                  </button>
                </Link>
                <button className='check-action__btnRight'>
                  <p>Enviar</p>
                </button>
                {status && (
                  <ModalState
                    isOpen
                    handleAction={() => {
                      setStatus(null)
                    }}
                    nameAction='Entendido'
                    messageModal={status.error ? status.error : status.success}
                    stateModal={status.error ? 'check' : 'cross'}
                  />
                )}
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default EmailInv
