import React, { useState, useEffect } from 'react'
import axios from 'axios'
import getCookie from '../../utils/getCookie'
import { Link } from 'react-router-dom'
import { API_URL } from '../../config.js'
import Layout from '../../components/Layout'
import ModalState from '../../components/ModalState'

import _plus from '../..//assets/images/iconPlus.svg'
import './styles.scss'
// const FileReader = window.FileReader

const EmailInv = props => {
  const { eventId, organizationName } = props.match.params || {}

  const [inputValues, setInputValues] = useState({})

  useEffect(() => {
    async function getEventId () {
      try {
        const { data } = await axios(`${API_URL}/api/v1/events`, {
          headers: { Authorization: `Bearer ${getCookie('token')}` },
          params: { eventId }
        })
        const values = {
          name: data.name,
          subject: data.title,
          message: data.description,
          image: data.image
        }
        setInputValues(values)
      } catch (error) {
        console.log(error)
      }
    }
    getEventId()
  }, [eventId])

  // const handleUpload = evn => {
  //   const fieldName = evn.target.name
  //   const fr = new FileReader()
  //   fr.onload = evn => {
  //     setInputValues({ ...inputValues, [fieldName]: fr.result })
  //   }
  //   fr.readAsDataURL(evn.target.files[0])
  // }

  const handleChange = evn => {
    const fieldName = evn.target.name
    const fieldValue = evn.target.value
    setInputValues({ ...inputValues, [fieldName]: fieldValue })
  }

  const handleSubmit = async evn => {
    evn.preventDefault()
    const emailData = {
      subject: inputValues.title,
      message: inputValues.description,
      image: inputValues.image || ''
    }
    console.log({
      data: {
        eventId,
        emailData
      }
    })
    try {
      await axios(`${API_URL}/api/v1/mails/special`, {
        headers: { Authorization: `Bearer ${getCookie('token')}` },
        method: 'POST',
        data: {
          eventId,
          emailData
        }
      })
      console.log('Enviado exitosamente')
    } catch (error) {
      console.log(error)
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
            <h2>Editar asociados - {inputValues.name}</h2>
            <form onSubmit={handleSubmit}>
              <div className='formEdit-container'>
                <div className='formEdit-container-formLeft'>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>
                      Asunto del email
                    </label>
                    <input
                      onChange={handleChange}
                      value={inputValues.title || ''}
                      name='title'
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
                      value={inputValues.description || ''}
                      type='text'
                      className='formEdit-field__textarea2'
                      name='description'
                    />
                  </div>
                </div>
                <div className='formEdit-container-formRigth'>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>
                      Agrega una imagen (opcional)
                    </label>
                    <input
                      name='logo'
                      onChange={handleChange}
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
                </div>
              </div>
              <div className='check-action'>
                <Link to={`/dashboard/${inputValues.organizationName}/${eventId}/edit/`}>
                  <button className='check-action__btnLeft'>
                    <p>Cancelar</p>
                  </button>
                </Link>
                <button onClick={openModal} className='check-action__btnRight'>
                  <p>Enviar</p>
                </button>
                <ModalState
                  isOpen={showModal}
                  handleAction={GoBack}
                  nameAction='Entendido'
                  messageModal={Error ? 'Oh no hubo un problema' : 'Ha sido enviado con exito!'}
                  stateModal={Error ? 'check' : 'cross'}
                />
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default EmailInv
