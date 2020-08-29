import React, { useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'
import { API_URL } from '../../config.js'
import getCookie from '../../utils/getCookie'
import ModalState from '../../components/ModalState'

import _plus from '../..//assets/images/iconPlus.svg'
import './styles.scss'

const NewOrg = ({ user }) => {
  const userId = user.userId
  const [inputValues, setInputValues] = useState({})

  const handleChange = evn => {
    const fieldName = evn.target.name
    const fieldValue = evn.target.value
    setInputValues({ ...inputValues, [fieldName]: fieldValue })
  }

  const handleSubmit = async evn => {
    evn.preventDefault()
    const organizationData = {
      organizationName: inputValues.organizationName,
      organizationLogo: inputValues.image || ''
    }
    console.log({
      data: {
        userId,
        organizationData
      }
    })
    try {
      await axios(`${API_URL}/api/v1/organizations`, {
        headers: { Authorization: `Bearer ${getCookie('token')}` },
        method: 'POST',
        data: {
          userId,
          organizationData
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
                        name='logo'
                        onChange={handleChange}
                        id='imgHeader'
                        type='file'
                        value={inputValues.Logo || ''}
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
                  <Link to='/dashboard'>
                    <button className='check-action__btnLeft'>
                      <p>Cancelar</p>
                    </button>
                  </Link>
                  <button className='check-action__btnRight' onClick={openModal}>
                    <p>Crear</p>
                  </button>
                  <ModalState
                    isOpen={showModal}
                    handleAction={GoBack}
                    nameAction='Entendido'
                    messageModal={Error ? 'Oh no hubo un problema' : 'Ha sido creada con exito!'}
                    stateModal={Error ? 'check' : 'cross'}
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

export default connect(mapStateToProps, null)(NewOrg)
