import React, { useRef } from 'react'
import Banner from './components/Banner'
import EventHero from './components/EventHero'
import Shedule from './components/Shedule'
import Associates from './components/Associates'
import Meet from './components/Meet'
import Header from './components/Header'
import Footer from './components/Footer'
import styles from './styles.module.scss'

const TemplateTwo = ({ templateData }) => {
  const { speakers, associates } = templateData
  const banner = useRef(null)
  const conferences = useRef(null)
  const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop - 100)
  const executeScroll = evn => {
    const link = evn.currentTarget.textContent
    link === 'Que es?' && scrollToRef(banner)
    link === 'Agenda' && scrollToRef(conferences)
  }

  const h1ClassName = `${styles['main-title']} ${styles['section-subtitle']}`
  const titleClassName = `${styles['event-title']} ${styles['section-title']} ${styles.section}`

  return (
    <div>
      <Header handleClick={executeScroll} />
      <Banner data={templateData} />
      <h2 ref={banner} className={titleClassName}>
        {templateData.name}
      </h2>
      <EventHero data={templateData} />
      <section className='section'>
        <h1 ref={conferences} className={h1ClassName}>
          Agenda
        </h1>
        {templateData.agenda.map(shedule => (
          <Shedule data={shedule} key={shedule.dayId} />
        ))}
      </section>
      <section className='section'>
        <h1 className={h1ClassName}>Conferencistas</h1>
        {speakers.map((speaker, index) =>
          index % 2 === 0 ? (
            <Meet
              data={speaker}
              key={speaker.speakerId}
              styleType='meet--inverse'
            />
          ) : (
            <Meet data={speaker} key={speaker.speakerId} />
          )
        )}
      </section>
      <section className='section'>
        <h1 className={h1ClassName}>Asociados</h1>
        <Associates data={associates} />
      </section>
      <Footer />
    </div>
  )
}
export default TemplateTwo
