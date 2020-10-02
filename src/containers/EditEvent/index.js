import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import ApiService from '../../utils/ApiService'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'
import { deleteEvent, setCurrentEvent } from '../../actions'
import { ItemCollaborator } from '../../components/ItemCollaborate'
import ModalAction from '../../components/ModalAction'
import ModalState from '../../components/ModalState'
import Loader from '../../components/Loader'

import _edit from '../../assets/images/iconEdit.svg'
import _plus from '../..//assets/images/iconPlus.svg'
import _email from '../..//assets/images/iconEmail.svg'
import './styles.scss'

const EditEvent = props => {
  const { eventId } = props.match.params
  const isMyEvent = props.user.myEvents
    .filter(event => event.eventId === eventId)
    .shift()
  const isCollaboration = props.user.collaborations
    .filter(event => event.eventId === eventId)
    .shift()
  const { organizationName, name } = isMyEvent || isCollaboration

  const [openPrompt, setOpenPrompt] = useState(false)
  const [status, setStatus] = useState()
  const [collaboratorsList, setCollaboratorsList] = useState([])
  const [loader, setLoader] = useState(true)

  const emptyList = collaboratorsList.length < 1

  useEffect(() => {
    // async function getEventInfo () {
    //   try {
    //     const data = await ApiService.getEventInfo({ eventId })
    //     props.setCurrentEvent(data)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
    async function getCollaborators () {
      try {
        const data = await ApiService.getColabs({
          eventId,
          filters: 'collaborators'
        })
        console.log(data)
        setCollaboratorsList(data.collaborators)
        setLoader(false)
      } catch (error) {
        console.log(error)
        setLoader(false)
      }
    }
    getCollaborators()
  }, [eventId, setCollaboratorsList])

  const deleteItemCollaborator = email => {
    const listCollaborator = collaboratorsList.filter(
      collaborator => collaborator.email !== email
    )
    setCollaboratorsList(listCollaborator)
  }
  const deleteEvent = async () => {
    try {
      await ApiService.deleteEvent({ eventId })
      props.history.push('/dashboard')
      props.deleteEvent(eventId)
    } catch (error) {
      console.log(error)
      setStatus({ error: 'Ups parece que hubo un error' })
    }
  }
  const publishEvent = async () => {
    const orgUrl = organizationName.replace(/ /g, '-')
    const evnUrl = name.replace(/ /g, '-')
    try {
      await ApiService.publishEvent({
        actualStatus: false,
        eventId
      })
      setStatus({
        error: false,
        success: `Tu sitio ha sido publicado en unu.vercel.app/${orgUrl}/${evnUrl}`
      })
    } catch (error) {
      setStatus({ error: 'Ups parece que hubo un error' })
    }
  }
  const showPrompt = () => setOpenPrompt(true)
  const closePrompt = () => setOpenPrompt(false)

  return (
    <>
      <Layout active='home'>
        <div className='editEvent'>
          <h2>{organizationName}</h2>
          <div className='editEvent-container'>
            <div className='editEvent-container__left'>
              <div className='editEvent-container__left-edit'>
                <h2>{name}</h2>
                <ul>
                  <Link
                    to={`/dashboard/${organizationName}/${eventId}/edit/info`}
                  >
                    <li>
                      <p>Editar - Información General </p>
                      <img src={_edit} alt='icono editar' />
                    </li>
                  </Link>
                  <Link
                    to={`/dashboard/${organizationName}/${eventId}/edit/schedule`}
                  >
                    <li>
                      <p>Editar - Agenda</p>
                      <img src={_edit} alt='icono editar' />
                    </li>
                  </Link>
                  <Link
                    to={`/dashboard/${organizationName}/${eventId}/edit/sponsor/edit`}
                  >
                    <li>
                      <p>Editar - Asociados</p>
                      <img src={_edit} alt='icono editar' />
                    </li>
                  </Link>
                  <Link
                    to={`/dashboard/${organizationName}/${eventId}/edit/email`}
                  >
                    <li>
                      <span>Comunicate con tus invitados</span>
                      <img src={_email} alt='icono email' />
                    </li>
                  </Link>
                </ul>
              </div>
              <div className='check-action'>
                {isMyEvent && (
                  <button
                    onClick={showPrompt}
                    className='check-action__btnLeft'
                  >
                    <p>Eliminar</p>
                  </button>
                )}
                <button
                  onClick={publishEvent}
                  className='check-action__btnRight'
                >
                  <p>Publicar</p>
                </button>
              </div>
            </div>
            <div className='editEvent-container__right'>
              <h2>Colaboradores</h2>
              <div className='editEvent-container__right-collaborates'>
                <ul>
                  {loader && <Loader />}
                  {!emptyList &&
                    collaboratorsList.map((collaborator, index) => (
                      <ItemCollaborator
                        data={collaborator}
                        eventId={eventId}
                        deleteCollaborator={deleteItemCollaborator}
                        key={index}
                        isMyEvent={isMyEvent}
                      />
                    ))}
                  {!loader && emptyList && (
                    <div className='editEvent-container__right-empty'>
                      No tienes colaboradores para este evento
                    </div>
                  )}
                </ul>
              </div>
              <Link
                to={`/dashboard/${organizationName}/${eventId}/addCollaborator`}
              >
                <div className='editEvent-container__right-btn'>
                  <img src={_plus} alt='icono editar' />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
      <ModalAction
        isOpen={openPrompt}
        nameAction='Eliminar Evento'
        handleAction={deleteEvent}
        handleCloseModal={closePrompt}
      />
      {status && (
        <ModalState
          isOpen
          handleAction={() => {
            closePrompt()
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

const mapStateToProps = state => {
  return {
    user: state.user.data
  }
}
const mapDispatchToProps = {
  deleteEvent,
  setCurrentEvent
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEvent)
