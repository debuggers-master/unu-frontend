import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Event from './Event'
import './styles.scss'

const eventInfo = {
  //Must be provided by props
  title: 'Uno Lulo',
  description:
    'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos ',
  organization: 'Platzi',
}
const EventsPreview = () => {
  return (
    <div>
      <Header styleType={'header--bg'} />
      <section className="event-preview-section section-container">
        <div className="event-preview-section__title">EVENTOS</div>
        <div className="event-preview-section__subtitle">
          Dejate llevar por la curiosidad por saber eventos que estarán por
          suceder, registrate a los eventos que quieras y no te preocupes si se
          te olvida, nosotros te recordaremos un día antes
        </div>
      </section>
      <section className="section">
        <Event info={eventInfo} />
        <Event info={eventInfo} styleType={'event--reverse'} />
        <Event info={eventInfo} />
        <Event info={eventInfo} styleType={'event--reverse'} />
      </section>
      <Footer />
    </div>
  )
}
export default EventsPreview
