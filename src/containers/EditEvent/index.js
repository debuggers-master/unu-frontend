import React from 'react'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'

import { ItemCollaborator } from '../../components/ItemCollaborate'
import _edit from '../../assets/images/iconEdit.svg'
import _plus from '../..//assets/images/iconPlus.svg'
import './styles.scss'

const EditEvent = () => {
  return (
    <>
      <Layout active='home'>
        <div className='editEvent'>
          <h2>Stark Industries</h2>
          <div className='editEvent-container'>
            <div className='editEvent-container-left'>
              <div className='editEvent-container-left-edit'>
                <h2>Presentación Iron Man</h2>
                <ul>
                  <Link to='/dashboard/organizationName/eventId/edit/info'>
                    <li>
                      <p>
                        Editar - Información General del evento
                      </p>
                      <img src={_edit} alt='icono editar' />
                    </li>
                  </Link>
                  <Link to='/dashboard/organizationName/eventId/edit/schedule'>
                    <li>
                      <p>
                        Editar - Agenda
                      </p>
                      <img src={_edit} alt='icono editar' />
                    </li>
                  </Link>
                  <Link to='/dashboard/organizationName/eventId/edit/sponsor/edit'>
                    <li>
                      <p>
                        Editar - Asociados
                      </p>
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
                  {/* devendria un .map con los colaboradores que maneje el evento  */}
                  <ItemCollaborator
                    firstName='Adriana Fernanda'
                    lastName='Herrera Lisboa'
                    email='julioh12@gmail.com'
                  />
                  <ItemCollaborator
                    firstName='Julio Armando'
                    lastName='Herrera Lisboa'
                    email='julioh12@gmail.com'
                  />
                </ul>
              </div>
              <div className='editEvent-container-right-btn'>
                <img src={_plus} alt='boton crear organización' />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default EditEvent
