import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { newOrgRequest, setUserStatus } from '../../actions'
import Layout from '../../components/Layout'
import ModalState from '../../components/ModalState'
import './styles.scss'
import _plus from '../..//assets/images/iconPlus.svg'
const FileReader = window.FileReader

const NewOrg = ({
  user,
  newOrgRequest,
  userStatus,
  setUserStatus,
  ...props
}) => {
  const userId = user.userId
  const [inputValues, setInputValues] = useState({})
  const [status, setStatus] = useState()
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
    newOrgRequest({
      userId,
      organizationData
    })
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
  useEffect(() => {
    if (userStatus === 'error') {
      setStatus({ error: 'Ups! parece que hubo un error' })
    }
    if (userStatus === 'success') {
      props.history.push('/dashboard')
      setUserStatus('idle')
    }
  }, [userStatus, setUserStatus, props])
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
                  {status && (
                    <ModalState
                      isOpen
                      handleAction={() => {
                        setUserStatus('idle')
                        setStatus(null)
                      }}
                      nameAction='Entendido'
                      messageModal={
                        status.error ? status.error : status.success
                      }
                      stateModal={status.error ? 'check' : 'cross'}
                    />
                  )}
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
    user: state.user.data,
    userStatus: state.user.status
  }
}
const mapDispatchToProps = {
  newOrgRequest,
  setUserStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(NewOrg)
