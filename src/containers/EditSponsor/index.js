import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import getCookie from '../../utils/getCookie'
import { Link } from 'react-router-dom'
import { API_URL } from '../../config.js'
import './styles.scss'
import Layout from '../../components/Layout'
import ModalState from '../../components/ModalState'

import _plus from '../..//assets/images/iconPlus.svg'
const FileReader = window.FileReader
const EditSponsor = props => {
  const { eventId, associatedId } = props.match.params || {}

  const [inputValues, setInputValues] = useState({})
  const [status, setStatus] = useState()

  const logoImg = useRef(null)

  const img = {
    logo: logoImg
  }

  useEffect(() => {
    async function getAssociates () {
      try {
        const { data } = await axios(
          `${API_URL}/api/v1/events?eventId=${eventId}&filters=associates`,
          {
            headers: { Authorization: `Bearer ${getCookie('token')}` }
          }
        )
        const sponsor = data.associates
          .filter(associate => associate.associatedId === associatedId)
          .shift()
        console.log('sponsor info', sponsor)
        associatedId && setInputValues(sponsor)
      } catch (error) {
        setStatus({ error: 'Parece que hubo un error :(' })
        console.log(error)
      }
    }
    getAssociates()
  }, [eventId, associatedId])

  const handleSubmit = async evn => {
    evn.preventDefault()
    const associatedData = {
      associatedId: associatedId,
      name: inputValues.name,
      url: inputValues.url,
      logo: inputValues.logo
    }
    console.log({
      data: {
        eventId,
        associatedData
      }
    })
    try {
      await axios(`${API_URL}/api/v1/events/associates`, {
        headers: { Authorization: `Bearer ${getCookie('token')}` },
        method: associatedId ? 'PUT' : 'POST',
        data: {
          eventId,
          associatedData
        }
      })
      setStatus({ error: false, success: 'Modificado Exitosamente' })
    } catch (error) {
      console.log(error)
      setStatus({ error: 'Parece que hubo un error :(' })
    }
  }

  const handleUpload = evn => {
    const fieldName = evn.target.name
    const fr = new FileReader()
    fr.onload = () => {
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

  return (
    <>
      <Layout active='home'>
        <div className='editInfo'>
          <h2>Stark Industries</h2>
          <div className='editInfo-container'>
            <h2>Editar asociados - Presentación Iron Man</h2>
            <form onSubmit={handleSubmit}>
              <div className='formEdit-container'>
                <div className='formEdit-container-formLeft'>
                  <div className='formEdit-field'>
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
                  </div>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>
                      Url del asociado
                    </label>
                    <input
                      name='url'
                      value={inputValues.url || ''}
                      onChange={handleChange}
                      type='text'
                      className='formEdit-field__input'
                    />
                  </div>
                </div>
                <div className='formEdit-container-formRigth'>
                  <div className='formEdit-container'>
                    <div className='formEdit-field'>
                      <label className='formEdit-field__label'>
                        Logo o imagen del asociado
                      </label>
                      <input
                        name='logo'
                        onChange={handleUpload}
                        id='imgHeader'
                        type='file'
                      />
                      <div ref={logoImg} className='formEdit-field__file'>
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
              </div>
              <div className='check-action'>
                <Link to={`/dashboard/organizationName/${eventId}/edit/`}>
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

export default EditSponsor
