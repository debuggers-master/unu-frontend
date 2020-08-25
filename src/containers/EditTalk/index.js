import React from 'react'
import Layout from '../../components/Layout'
import NewEventForm from '../../components/NewEventForm'
import './styles.scss'

const NewEvent = () => {
  return (
    <>
      <Layout active={'new'}>
        <div className='newEvent'>
          <h2>Nuevo evento</h2>
          <div className='newEvent-container'>
            <h3>Requerimientos iniciales</h3>
            <NewEventForm/>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default NewEvent
