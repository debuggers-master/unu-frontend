import React from 'react'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'

import { ItemDay } from '../../components/ItemDay'
import './styles.scss'

const EditSchedule = props => {
  const evnMock = {
    date: '02/07/2020',
    organizationId: '0899',
    eventId: 1234,
    dayId: '0001'
  }
  const { date, organizationId, eventId, dayId } = props.data || evnMock
  return (
    <>
      <Layout active='home'>
        <div className='editSchedule'>
          <h2>Stark Industries</h2>
          <div className='editSchedule-container'>
            <h2>Editar Agenda - Presentación Iron Man</h2>
            <ul>
              <ItemDay
                organizationId={organizationId}
                eventId={eventId}
                dayId={dayId}
                date={date}
              />
              <Link to={`/dashboard/${organizationId}/${eventId}/edit/schedule/${dayId}/date`}>
                <p className='editSchedule-NewDay'>Añade un día</p>
              </Link>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default EditSchedule
