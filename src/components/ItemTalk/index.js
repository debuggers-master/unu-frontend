import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import getCookie from '../../utils/getCookie'
import { API_URL } from '../../config'
import ModalAction from '../../components/ModalAction'
import ModalState from '../../components/ModalState'

import './styles.scss'

export const ItemTalk = props => {
  const {
    date,
    organizationName,
    eventId,
    dayId,
    conferenceId,
    name,
    deleteConference
  } = props
  const [openPrompt, setOpenPrompt] = useState(false)
  const [status, setStatus] = useState()

  const deleteTalk = async () => {
    try {
      await axios(`${API_URL}/api/v1/events/conference`, {
        headers: { Authorization: `Bearer ${getCookie('token')}` },
        method: 'DELETE',
        data: {
          dayId,
          eventId,
          conferenceId
        }
      })
      deleteConference(conferenceId)
    } catch (error) {
      console.log(error)
      setStatus({ error: 'Ups parece que hubo un error' })
    }
  }
  const closePrompt = () => setOpenPrompt(false)
  const showPrompt = () => setOpenPrompt(true)

  return (
    <>
      <li key={conferenceId}>
        <div className='ItemTalk-day'>
          <div className='ItemTalk-day__Count'>
            <p>{name}</p>
          </div>
          <div className='ItemTalk-day__Actions'>
            <Link
              to={{
                pathname: `/dashboard/${organizationName}/${eventId}/edit/schedule/${dayId}/${conferenceId}`,
                state: { date }
              }}
            >
              <p>Editar</p>
            </Link>
            <button onClick={showPrompt}>
              {' '}
              <p>Eliminar</p>
            </button>
          </div>
        </div>
      </li>
      <ModalAction
        isOpen={openPrompt}
        nameAction='Eliminar Conferencia'
        handleAction={deleteTalk}
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
          messageModal={status.error}
          stateModal={status.error ? 'check' : 'cross'}
        />
      )}
    </>
  )
}
