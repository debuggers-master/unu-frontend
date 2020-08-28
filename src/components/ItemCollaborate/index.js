import React from 'react'
import axios from 'axios'
import getCookie from '../../utils/getCookie'
import { API_URL } from '../../config'

import _trash from '../../assets/images/iconTrash.svg'
import './styles.scss'

export const ItemCollaborator = props => {
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
    }
  }

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
          <div onClick={deleteCollaborator}>
            <img src={_trash} alt='icono borrar' />
          </div>
        </div>
      </li>
      <div className='line' />
    </>
  )
}
