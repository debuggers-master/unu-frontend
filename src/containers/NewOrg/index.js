import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../config.js'
import { connect } from 'react-redux'
import Layout from '../../components/Layout'
import ModalState from '../../components/ModalState'
import fieldValidator from '../../utils/formValidator'
import getCookie from '../../utils/getCookie'
import { createOrganization } from '../../actions'
import _plus from '../..//assets/images/iconPlus.svg'
import './styles.scss'
const FileReader = window.FileReader
const NewOrg = ({ user, createOrganization }) => {
  const userId = user.userId
  const [inputValues, setInputValues] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [error, setError] = useState(false)

  const logoImg = useRef(null)
  const img = {
    organizationLogo: logoImg
  }
  const handleChange = evn => {
    const fieldName = evn.target.name
    const fieldValue = evn.target.value
    setInputValues({ ...inputValues, [fieldName]: fieldValue })
  }

  const handleSubmit = async evn => {
    evn.preventDefault()
    const organizationData = {
      organizationName: inputValues.organizationName,
      organizationLogo: inputValues.organizationLogo || ''
    }
    console.log({
      data: {
        userId,
        organizationData
      }
    })
    try {
      const res = await axios(`${API_URL}/api/v1/organizations`, {
        headers: { Authorization: `Bearer ${getCookie('token')}` },
        method: 'POST',
        data: {
          userId,
          organizationData
        }
      })
      createOrganization({
        organizationName: organizationData.organizationName,
        organizationId: res.data.organizationId
      })
      openModal()
    } catch (error) {
      console.log(error)
      setError(true)
      openModal()
    }
  }
  const handleUpload = async evn => {
    const fieldName = evn.target.name
    const fr = new FileReader()
    fr.onload = evn => {
      setInputValues({ ...inputValues, [fieldName]: fr.result })

      img[fieldName].current.style.backgroundImage = `url(${fr.result})`
    }
    fr.readAsDataURL(evn.target.files[0])
  }

  const openModal = () => {
    setShowModal(true)
  }

  const GoBack = () => {
    window.history.back()
  }

  return (
    <>
      <Layout active='home'>
        <div className='newOrg'>
          <h2>Nueva Organización</h2>
          <div className='newOrg-container'>
            <div className='newOrg-container__card'>
              <form onSubmit={handleSubmit}>
                <div className='formEdit-container'>
                  <div className='formEdit-container-formLeft'>
                    <div className='formEdit-field'>
                      <label className='formEdit-field__label'>
                        Nombre de la organización
                      </label>
                      <input
                        onChange={handleChange}
                        value={inputValues.organizationName || ''}
                        name='organizationName'
                        type='text'
                        className='formEdit-field__input'
                      />
                    </div>
                  </div>
                  <div className='formEdit-container-formRigth'>
                    <div className='formEdit-field'>
                      <label className='formEdit-field__label'>
                        Agrega el logo (opcional)
                      </label>
                      <input
                        name='organizationLogo'
                        onChange={handleUpload}
                        id='imgHeader'
                        type='file'
                        value={inputValues.Logo || ''}
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
                <div className='check-action'>
                  <Link to='/dashboard'>
                    <button className='check-action__btnLeft'>
                      <p>Cancelar</p>
                    </button>
                  </Link>
                  <button className='check-action__btnRight'>
                    <p>Crear</p>
                  </button>
                  <ModalState
                    isOpen={showModal}
                    handleAction={GoBack}
                    nameAction='Entendido'
                    messageModal={
                      error
                        ? '¡Oh, no! Hubo un problema'
                        : 'Ha sido creada con exito!'
                    }
                    stateModal={error ? 'check' : 'cross'}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
const mapStateToProps = state => {
  return {
    user: state.user
  }
}
const mapDispatchToProps = {
  createOrganization
}

export default connect(mapStateToProps, mapDispatchToProps)(NewOrg)
