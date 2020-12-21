import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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

  const deleteTalk = () => {
    closePrompt()
    deleteConference({
      eventId,
      dayId,
      conferenceId
    })
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
