import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'

import { ItemTalk } from '../../components/ItemTalk'
import './styles.scss'

const EditDay = props => {
  return (
    <>
      <Layout active='home'>
        <div className='editDay'>
          <h2>{props.data.organizationName}</h2>
          <div className='editDay-container'>
            <h2>{`Editar Agenda - ${props.data.name} - ${props.data.date}`}</h2>
            <ul>
              {props.data.conferences.map(item => {
                return (
                  <>
                    <ItemTalk
                      organizationId={props.data.organizationId}
                      eventId={props.data.eventId}
                      dayId={props.data.dayId}
                      conferenceId={item.conferenceId}
                      name={item.name}
                    />
                  </>
                )
              })}
              <Link to={`/dashboard/${props.data.organizationId}/${props.data.eventId}/edit/schedule/${props.data.dayId}/new`}>
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
