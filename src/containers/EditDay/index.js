import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../config.js'
import Layout from '../../components/Layout'

import { ItemTalk } from '../../components/ItemTalk'
import './styles.scss'

const EditDay = props => {
  const { organizationName, eventId, dayId } = props.match.params

  const [conferencesList, setConferencesList] = useState([])
  const isEmpty = conferencesList.length < 1
  useEffect(() => {
    async function getTalks () {
      try {
        const { data } = await axios(`${API_URL}/api/v1/events`, {
          params: {
            eventId,
            filters: 'agenda'
          }
        })
        const dayData = data.agenda.filter(day => day.dayId === dayId).shift()

        setConferencesList(dayData.conferences)
      } catch (error) {
        console.log(error)
      }
    }
    getTalks()
  }, [eventId, dayId])

  const deleteConference = conferenceId => {
    const listConferences = conferencesList.filter(
      conference => conference.conferenceId !== conferenceId
    )
    setConferencesList(listConferences)
  }
  return (
    <>
      <Layout active='home'>
        <div className='editDay'>
          <h2>{organizationName}</h2>
          <div className='editDay-container'>
            <h2>Editar Agenda</h2>
            <ul>
              {!isEmpty &&
                conferencesList.map(day => {
                  return (
                    <>
                      <ItemTalk
                        organizationName={organizationName}
                        eventId={eventId}
                        dayId={dayId}
                        conferenceId={day.conferenceId}
                        name={day.name}
                        deleteConference={deleteConference}
                      />
                    </>
                  )
                })}
              <Link
                to={`/dashboard/${organizationName}/${eventId}/edit/schedule/${dayId}/new`}
              >
                <p className='editDay-NewDay'>Añade una conferencia</p>
              </Link>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default EditDay
