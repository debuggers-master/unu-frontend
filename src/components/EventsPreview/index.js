import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../../config.js'
import Header from '../Header'
import Footer from '../Footer'
import Event from './Event'
import BurguerButton from '../BurguerButton'
import './styles.scss'

const eventInfo = {
  // Must be provided by props
  title: 'Uno Lulo',
  description:
    'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos ',
  organization: 'Platzi'
}
const EventsPreview = () => {
  const [evnList, setEvnList] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    async function getData () {
      try {
        const { data } = await axios(`${API_URL}/api/v1/events/list`, {
          method: 'GET'
        })
        console.log(data)
        setEvnList(data)
      } catch (error) {
        setError(true)
      }
    }
    getData()
  }, [])

  if (error) {
    return <div>Parece que no hay nada</div>
  }

  return (
    <div>
      <Header styleType='header--bg' />
      <BurguerButton typeOf='home' />
      <section className='event-preview-section section-container'>
        <div className='event-preview-section__title'>EVENTOS</div>
        <div className='event-preview-section__subtitle'>
          Dejate llevar por la curiosidad por saber eventos que estarán por
          suceder, registrate a los eventos que quieras y no te preocupes si se
          te olvida, nosotros te recordaremos un día antes
        </div>
      </section>
      <section className='section'>
        <Event info={eventInfo} />
        <Event info={eventInfo} styleType='event--reverse' />
        <Event info={eventInfo} />
        <Event info={eventInfo} styleType='event--reverse' />
        {evnList.map((evn, index) =>
          index % 2 === 0 ? (
            <Event info={evn} key={evn.eventId} styleType='event--reverse' />
          ) : (
            <Event info={evn} key={evn.eventId} />
          )
        )}
      </section>
      <Footer />
    </div>
  )
}
export default EventsPreview
