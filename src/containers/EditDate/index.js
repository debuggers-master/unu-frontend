import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../../components/Layout'
import './styles.scss'

const EditDate = props => {
  const evnMock = {
    organizationId: '0899',
    eventId: 1234,
    organizationName: 'Plazti',
    name: 'PlatziConf',
    shortDescription: 'La mejor conferencia del mundo'
  }
  const { organizationId, eventId } = props.data || evnMock
  return (
    <>
      <Layout active='home'>
        <div className='newEvent'>
          <h2>Editar fecha día</h2>
          <div className='newEvent-container'>
            <div className='newEvent-container__card'>
              <form>
                <div className='formEdit-field'>
                  <label className='formEdit-field__label'>
                    <h3>
                      ¿Qué dia quieres elegir?
                    </h3>
                  </label>
                  <input
                    type='date'
                    id='start'
                    className='formEdit-field__input'
                    defaultValue='2020-12-12'
                    min='2020-08-01'
                    max='2021-12-31'
                  />
                </div>
              </form>
              <div className='check-action'>
                <Link
                  to={`/dashboard/${organizationId}/${eventId}/edit/schedule`}
                >
                  <button className='check-action__btnLeft'>
                    <p>Cancelar</p>
                  </button>
                </Link>
                <button className='check-action__btnRight'>
                  <p>Guardar</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default EditDate
