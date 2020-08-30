import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../config.js'

import Layout from '../../components/Layout'
import { ItemDay } from '../../components/ItemDay'
import Loader from '../../components/Loader'
import './styles.scss'

const EditSchedule = props => {
  const { eventId, organizationName } = props.match.params
  const [daysList, setDaysList] = useState([])
  const [loader, setLoader] = useState(true)

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
        setLoader(false)
      } catch (error) {
        console.log(error)
        setLoader(false)
      }
    }
    getSchedule()
  }, [eventId])

  const deleteDay = dayId => {
    const list = daysList.filter(day => day.dayId !== dayId)
    setDaysList(list)
  }

  return (
    <>
      <Layout active='home'>
        <div className='editSchedule'>
          <h2>{organizationName}</h2>
          <div className='editSchedule-container'>
            <h2>Editar Agenda </h2>
            <ul>
              {loader && <Loader />}
              {isEmpty &&
                daysList.map((day, index) => (
                  <ItemDay
                    key={day.dayId}
                    dayIndex={index}
                    organizationName={organizationName}
                    eventId={eventId}
                    dayId={day.dayId}
                    date={day.date}
                    deleteDay={deleteDay}
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
