import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'
import ModalAction from '../../components/ModalAction'
import ModalState from '../../components/ModalState'

import { API_URL } from '../../config.js'
import getCookie from '../../utils/getCookie'
import { deleteOrganization } from '../../actions'
import { CardEvento } from '../../components/CardEvento'
import _user from '../../assets/images/iconPerson.svg'
import './styles.scss'

const OrgPreview = props => {
  const { organizationName } = props.match.params || {}
  const { organizationId } = props.location.state || ''
  const { events } = props.location.state || []

  const [publishedEvents, setPublishedEvents] = useState([])
  const [count, setCount] = useState([])
  const [status, setStatus] = useState()

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    async function getPublishedEvents () {
      try {
        const { data } = await axios(`${API_URL}/api/v1/events/list`)
        console.log(data)
        setPublishedEvents([]) // Pending!!
        setCount('') // Pending
      } catch (error) {
        console.log(error)
      }
    }
    getPublishedEvents()
  }, [])

  const deleteOrganization = async () => {
    try {
      await axios(`${API_URL}/api/v1/organizations`, {
        headers: { Authorization: `Bearer ${getCookie('token')}` },
        method: 'DELETE',
        data: {
          userId: props.user.userId,
          organizationId
        }
      })
      props.history.push('/dashboard')
      props.deleteOrganization(organizationId)
    } catch (error) {
      console.log(error)
      setStatus({ error: 'Ups parece que hubo un error' })
    }
  }
  const emptyEvents = events.length < 1
  const emptyPublicEvents = publishedEvents.length < 1

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
                <h2>Eventos Publicados</h2>
                {!emptyPublicEvents ? (
                  publishedEvents.map(item => (
                    <>
                      <Link to={item.url} key={item.eventId}>
                        <p>{item.name}</p>
                        <div>
                          <img src={_user} alt='icono de persona' />
                          <span>{count} registrados</span>
                        </div>
                      </Link>
                    </>
                  ))
                ) : (
                  <h4>
                    Aun no tienes eventos publicados{' '}
                    <span role='img' aria-label='eyes'>
                      👀
                    </span>
                  </h4>
                )}
              </div>
            </div>
            <div className='OrgPreview-container__Right'>
              <h2>Editar - Eventos</h2>
              <div className='OrgPreview-container__Right-container'>
                {!emptyEvents ? (
                  events.map((item, index) => (
                    <>
                      <Link
                        to={`/dashboard/${item.organizationName}/${item.eventId}/edit`}
                        key={index}
                      >
                        <CardEvento key={item.eventId} isMyEvent {...item} />
                      </Link>
                    </>
                  ))
                ) : (
                  <h4>
                    Aun no tienes eventos{' '}
                    <span role='img' aria-label='eyes'>
                      👀
                    </span>
                  </h4>
                )}
              </div>
            </div>
            <div className='OrgPreview-container__bottomLeft'>
              <h2>Consejos</h2>
              <ul>
                <li>Elije tu equipo y hazlos colaboradores del evento</li>
                <li>Crea los eventos que quieras, no hay límites!</li>
                <li>Pon descripciones llamativas para tu público</li>
                <li>
                  Imagina un tweet llamativo y ponlo como descripción corta
                </li>
                <li>
                  Podrás comunicarte con tus invitados cuando edites el evento
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
      {status && (
        <ModalState
          isOpen
          handleAction={() => {
            closeModal()
            setStatus(null)
          }}
          nameAction='Entendido'
          messageModal={status.error}
          stateModal='check'
        />
      )}
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
