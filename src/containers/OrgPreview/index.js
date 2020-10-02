import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'
import ModalAction from '../../components/ModalAction'
import ModalState from '../../components/ModalState'
import ApiService from '../../utils/ApiService'
import { deleteOrganization } from '../../actions'
import { CardEvento } from '../../components/CardEvento'
import './styles.scss'

const OrgPreview = props => {
  const { organizationName } = props.match.params || {}
  const { organizationId } = props.location.state || ''
  const { events } = props.location.state || []
  const [publishedEvents, setPublishedEvents] = useState([])
  const [status, setStatus] = useState()
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    async function getPublishedEvents () {
      try {
        const data = await ApiService.getPublishedEvents()
        const publishedEvnsList = data.filter(
          event => event.organizationName === organizationName
        )

        console.log(publishedEvnsList)
        setPublishedEvents(publishedEvnsList)
      } catch (error) {
        console.log(error)
      }
    }
    getPublishedEvents()
  }, [organizationName])

  const deleteOrganization = async () => {
    try {
      ApiService.deleteOrg({
        userId: props.user.data.userId,
        organizationId
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
                  publishedEvents.map(item => {
                    const orgUrl = item.organizationName.replace(/ /g, '-')
                    const evnUrl = item.name.replace(/ /g, '-')
                    return (
                      <>
                        <Link to={`/${orgUrl}/${evnUrl}`} key={item.eventId}>
                          <p>{item.name}</p>
                          <div />
                        </Link>
                      </>
                    )
                  })
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
                  <Link to='/dashboard/NewEvent'>Crear Evento</Link>
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
    user: state.user.data
  }
}
const mapDispatchToProps = {
  deleteOrganization
}

export default connect(mapStateToProps, mapDispatchToProps)(OrgPreview)
