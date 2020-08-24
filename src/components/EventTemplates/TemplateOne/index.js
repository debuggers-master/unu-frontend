import React, { useRef } from 'react'
import Banner from './components/Banner'
import EventHero from './components/EventHero'
import Shedule from './components/Shedule'
import Associates from './components/Associates'
import Meet from './components/Meet'
import Header from './components/Header'
import Footer from './components/Footer'
import './styles.scss'
const TemplateOne = ({ templateData }) => {
  const { speakers, associates } = templateData
  const banner = useRef(null)
  const conferences = useRef(null)
  const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop - 100)
  const executeScroll = evn => {
    const link = evn.currentTarget.textContent
    link === 'Que es?' && scrollToRef(banner)
    link === 'Agenda' && scrollToRef(conferences)
  }
  return (
    <div>
      <Header handleClick={executeScroll} />
      <Banner data={templateData} />
      <h2 ref={banner} className='main-title section-title section'>
        {templateData.name}
      </h2>
      <EventHero data={templateData} />
      <section className='section'>
        <h1 ref={conferences} className='main-title section-subtitle '>
          Agenda
        </h1>
        {templateData.agenda.map(shedule => (
          <Shedule data={shedule} key={shedule.dayId} />
        ))}
      </section>
      <section className='section'>
        <h1 className='main-title section-subtitle '>Conferencistas</h1>
        {speakers.map((speaker, index) =>
          index % 2 === 0 ? (
            <Meet data={speaker} styleType='meet--inverse' />
          ) : (
            <Meet data={speaker} />
          )
        )}
      </section>
      <section className='section'>
        <h1 className='main-title section-subtitle '>Associates</h1>
        <Associates data={associates} />
      </section>
      <Footer />
    </div>
  )
}
export default TemplateOne
