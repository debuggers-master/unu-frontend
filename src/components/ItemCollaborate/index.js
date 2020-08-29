import React, { useState } from 'react'
import axios from 'axios'
import getCookie from '../../utils/getCookie'
import { API_URL } from '../../config'
import ModalAction from '../../components/ModalAction'
import ModalState from '../../components/ModalState'

import _trash from '../../assets/images/iconTrash.svg'
import './styles.scss'

export const ItemCollaborator = props => {
  const [openPrompt, setOpenPrompt] = useState(false)
  const [status, setStatus] = useState()
  const { firstName, lastName, email } = props.data

  const deleteCollaborator = async () => {
    try {
      await axios(`${API_URL}/api/v1/events/collaborators`, {
        headers: { Authorization: `Bearer ${getCookie('token')}` },
        method: 'DELETE',
        data: {
          eventId: props.eventId,
          email
        }
      })
      props.deleteCollaborator(email)
      console.log('Eliminado exitosamente')
    } catch (error) {
      console.log(error)
      setStatus({ error: 'Ups parece que hubo un error' })
    }
  }
  const closePrompt = () => setOpenPrompt(false)
  const showPrompt = () => setOpenPrompt(true)

  return (
    <>
      <li>
        <div className='item'>
          <div>
            <p className='item-names'>
              {/* {this.props.firstName} {this.props.lastName} */}
              {firstName} {lastName}
            </p>
            <p className='item-email'>
              {/* {this.props.email} */}
              {email}
            </p>
          </div>
          <button onClick={showPrompt}>
            <img src={_trash} alt='icono borrar' />
          </button>
        </div>
      </li>
      <div className='line' />
      <ModalAction
        isOpen={openPrompt}
        nameAction='Eliminar Colaborador'
        handleAction={deleteCollaborator}
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
          messageModal={
            status.error ? status.error : 'Modificada exitosamente!'
          }
          stateModal={status.error ? 'check' : 'cross'}
        />
      )}
    </>
  )
}
