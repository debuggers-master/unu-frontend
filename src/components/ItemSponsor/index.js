import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import getCookie from '../../utils/getCookie'
import { API_URL } from '../../config'
import './styles.scss'
import ModalAction from '../../components/ModalAction'

export const ItemSponsor = props => {
  const { name, associatedId } = props.data.associate || {}
  const { organizationName, eventId } = props.data
  const [openPrompt, setOpenPrompt] = useState(false)

  const deleteSponsor = async () => {
    try {
      await axios(`${API_URL}/api/v1/events/associates`, {
        headers: { Authorization: `Bearer ${getCookie('token')}` },
        method: 'DELETE',
        data: {
          eventId,
          associatedId
        }
      })
      props.deleteItemSponsor(associatedId)
      console.log('Eliminado exitosamente')
    } catch (error) {
      console.log(error)
    }
  }
  const showPrompt = () => setOpenPrompt(true)
  const closePrompt = () => setOpenPrompt(false)
  return (
    <>
      <li>
        <div className='ItemTalk-day'>
          <div className='ItemTalk-day__Count'>
            <p>{name}</p>
          </div>
          <div className='ItemTalk-day__Actions'>
            <Link
              to={`/dashboard/${organizationName}/${eventId}/edit/sponsor/edit/${associatedId}`}
            >
              <p>Editar</p>
            </Link>
            <button onClick={showPrompt}>Eliminar</button>
          </div>
        </div>
      </li>
      <ModalAction
        isOpen={openPrompt}
        nameAction='Eliminar Evento'
        handleAction={deleteSponsor}
        handleCloseModal={closePrompt}
      />
    </>
  )
}
