import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../../config.js'

import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'

import { ItemDay } from '../../components/ItemDay'
import './styles.scss'

const EditSchedule = props => {
  const { eventId, organizationName } = props.match.params
  const [daysList, setDaysList] = useState([])
  const isEmpty = daysList.length > 0

  useEffect(() => {
    async function getSchedule () {
      try {
        const { data } = await axios(`${API_URL}/api/v1/events`, {
          params: {
            eventId,
            filters: 'agenda'
          }
        })
        setDaysList(data.agenda)
      } catch (error) {
        console.log(error)
      }
    }
    getSchedule()
  }, [eventId])

  return (
    <>
      <Layout active='home'>
        <div className='editSchedule'>
          <h2>{organizationName}</h2>
          <div className='editSchedule-container'>
            <h2>Editar Agenda </h2>
            <ul>
              {isEmpty &&
                daysList.map((day, index) => (
                  <ItemDay
                    key={day.dayId}
                    dayIndex={index}
                    organizationName={organizationName}
                    eventId={eventId}
                    dayId={day.dayId}
                    date={day.date}
                  />
                ))}
              <Link
                to={`/dashboard/${organizationName}/${eventId}/edit/scheduleDay`}
              >
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
