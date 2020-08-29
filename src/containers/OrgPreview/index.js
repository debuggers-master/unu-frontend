import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'
import ModalAction from '../../components/ModalAction'
import { API_URL } from '../../config.js'
import getCookie from '../../utils/getCookie'
import { deleteOrganization } from '../../actions'
import { CardEvento } from '../../components/CardEvento'
import _user from '../../assets/images/iconPerson.svg'
import './styles.scss'

const OrgPreview = props => {
  const { organizationId, organizationName } = props.match.params || {}
  const [organization, setOrganization] = useState([])
  const [count, setCount] = useState([])
  useEffect(() => {
    async function getOrganization () {
      try {
        const { data } = await axios(`${API_URL}/api/v1/organizations`, {
          headers: { Authorization: `Bearer ${getCookie('token')}` }
        })
        console.log(data)
        setOrganization(data.organizationData)
      } catch (error) {
        console.log(error)
      }
    }
    getOrganization()
  }, [organizationId, setOrganization])

  useEffect(() => {
    async function getCount () {
      try {
        const { data } = await axios(`${API_URL}/api/v1/count-participantes`, {
          headers: { Authorization: `Bearer ${getCookie('token')}` },
          params: {
            organizationId
          }
        })
        console.log(data)
        setCount(data.collaborators)
      } catch (error) {
        console.log(error)
      }
    }
    getCount()
  })
  console.log(organization)
  const deleteOrganization = async () => {
    try {
      await axios(`${API_URL}/api/v1/evorganizationsnts`, {
        headers: { Authorization: `Bearer ${getCookie('token')}` },
        method: 'DELETE'
      })
      window.location.href = '/dashboard'
      props.deleteOrganization(organizationId)
    } catch (error) {
      console.log(error)
    }
  }
  const emptyEvents = true
  const [showModal, setShowModal] = useState(false)
  const openModal = () => {
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)
  }
  return (
    <>
      <Layout active='home'>
        <div className='OrgPreview'>
          <div className='OrgPreview-header'>
            <h2>{organizationName}</h2>
            <div className='check-action'>
              <button onClick={openModal} className='check-action__btnLeft'>
                <p>Eliminar</p>
              </button>
            </div>
            <ModalAction
              isOpen={showModal}
              handleCloseModal={closeModal}
              handleAction={deleteOrganization}
              nameAction='Eliminar'
            />
          </div>
          <div className='OrgPreview-container'>
            <div className='OrgPreview-container__topLeft'>
              <div className='OrgPreview-container__topLeft-Preview'>
                <h2>Vistas de eventos</h2>
                {organization.events.map((item) => (
                  <>
                    <Link to={item.url} key={item.eventId}>
                      <p>{item.name}</p>
                      <div>
                        <img src={_user} alt='icono de persona' />
                        <span>{count} registrados</span>
                      </div>
                    </Link>
                  </>
                ))}
              </div>
            </div>
            <div className='OrgPreview-container__Right'>
              <h2>Editar - Eventos</h2>
              <div className='OrgPreview-container__Right-container'>
                {emptyEvents ? (
                  organization.events.map((item) => (
                    <>
                      <Link
                        to={`/dashboard/${item.organizationName}/${item.eventId}/edit`}
                        key={item.eventName}
                      >
                        <CardEvento />
                      </Link>
                    </>
                  ))
                ) : (
                  <h4>Aun no tienes eventos <span role='img' aria-label='eyes'>👀</span></h4>
                )}
              </div>
            </div>
            <div className='OrgPreview-container__bottomLeft'>
              <h2>Consejos</h2>
              <ul>
                <li>Elije tu equipo y hazlos colaboradores del evento</li>
                <li>Crea los eventos que quieras, no hay límites!</li>
                <li>Pon descripciones llamativas para tu público</li>
                <li>Imagina un tweet llamativo y ponlo como descripción corta</li>
                <li>Podrás comunicarte con tus invitados cuando edites el evento</li>
              </ul>
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
  deleteOrganization
}

export default connect(mapStateToProps, mapDispatchToProps)(OrgPreview)
