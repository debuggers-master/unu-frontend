import React, { useEffect, useState } from 'react'
import axios from 'axios'
import getCookie from '../../utils/getCookie'
import { API_URL } from '../../config.js'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'

import { ItemCollaborator } from '../../components/ItemCollaborate'
import _edit from '../../assets/images/iconEdit.svg'
import _plus from '../..//assets/images/iconPlus.svg'
import './styles.scss'

const EditEvent = props => {
  const [collaboratorList, setCollaboratorsList] = useState([])
  const emptyList = collaboratorList.length > 0
  const evnMock = {
    eventId: '717658ca-2755-421d-8d48-9b99e7afc04d',
    organizationName: 'Plazti',
    name: 'PlatziConf',
    shortDescription: 'La mejor conferencia del mundo'
  }
  const { eventId, organizationName, name } = props.data || evnMock

  useEffect(() => {
    async function getCollaborators () {
      try {
        const { data } = await axios(`${API_URL}/api/v1/events`, {
          headers: { Authorization: `Bearer ${getCookie('token')}` },
          params: {
            eventId,
            filters: 'collaborators'
          }
        })
        console.log(data)
        setCollaboratorsList(data.collaborators)
      } catch (error) {
        console.log(error)
      }
    }
    getCollaborators()
  }, [eventId, setCollaboratorsList])

  const deleteItemCollaborator = email => {
    const listCollaborator = collaboratorList.filter(
      collaborator => collaborator.email !== email
    )
    setCollaboratorsList(listCollaborator)
  }
  return (
    <>
      <Layout active='home'>
        <div className='editEvent'>
          <h2>{organizationName}</h2>
          <div className='editEvent-container'>
            <div className='editEvent-container-left'>
              <div className='editEvent-container-left-edit'>
                <h2>{name}</h2>
                <ul>
                  <Link to={`/dashboard/organizationName/${eventId}/edit/info`}>
                    <li>
                      <p>Editar - Información General del evento</p>
                      <img src={_edit} alt='icono editar' />
                    </li>
                  </Link>
                  <Link
                    to={`/dashboard/organizationName/${eventId}/edit/schedule`}
                  >
                    <li>
                      <p>Editar - Agenda</p>
                      <img src={_edit} alt='icono editar' />
                    </li>
                  </Link>
                  <Link
                    to={`/dashboard/organizationName/${eventId}/edit/sponsor/edit`}
                  >
                    <li>
                      <p>Editar - Asociados</p>
                      <img src={_edit} alt='icono editar' />
                    </li>
                  </Link>
                </ul>
              </div>
              <div className='check-action'>
                <button className='check-action__btnLeft'>
                  <p>Eliminar</p>
                </button>
                <button className='check-action__btnRight'>
                  <p>Publicar</p>
                </button>
              </div>
            </div>
            <div className='editEvent-container-right'>
              <h2>Colaboradores</h2>
              <div className='editEvent-container-right-collaborates'>
                <ul>
                  {emptyList ? (
                    collaboratorList.map((collaborator, index) => (
                      <ItemCollaborator
                        data={collaborator}
                        eventId={eventId}
                        deleteCollaborator={deleteItemCollaborator}
                        key={index}
                      />
                    ))
                  ) : (
                    <div>Boton de agregar un colaborador</div>
                  )}
                </ul>
              </div>
              <div className='editEvent-container-right-btn'>
                <img src={_plus} alt='boton añadir colaborador' />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default EditEvent

// {
//       eventId: str,
//       organizationName: str,
//       name: str,
//       shortDescription: str,
//     }
