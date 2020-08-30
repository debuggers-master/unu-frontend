import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../../config.js'
import Header from '../Header'
import Footer from '../Footer'
import Event from './Event'
import './styles.scss'

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
      <section className='event-preview-section section-container'>
        <div className='event-preview-section__title'>EVENTOS</div>
        <div className='event-preview-section__subtitle'>
          Dejate llevar por la curiosidad por saber eventos que estarán por
          suceder, registrate a los eventos que quieras y no te preocupes si se
          te olvida, nosotros te recordaremos un día antes
        </div>
      </section>
      <section className='section'>
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
