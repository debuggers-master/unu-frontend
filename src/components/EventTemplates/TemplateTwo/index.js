import React from 'react'
import Banner from './components/Banner'
import EventHero from './components/EventHero'
import Shedule from './components/Shedule'
import Associates from './components/Associates'
import Meet from './components/Meet'
import Header from './components/Header'
import Footer from './components/Footer'
const TemplateTwo = () => {
  return (
    <div>
      <Header />
      <Banner />
      <h2 className='main-title section-title section'>Platzi Master</h2>
      <EventHero />
      <section className='section'>
        <h1 className='main-title section-subtitle '>Agenda</h1>
        <Shedule />
        <Shedule />
      </section>
      <section className='section'>
        <h1 className='main-title section-subtitle '>Conferencistas</h1>
        <Meet styleType='meet--inverse' />
        <Meet />
        <Meet styleType='meet--inverse' />
      </section>
      <section className='section'>
        <h1 className='main-title section-subtitle '>Associates</h1>
        <Associates />
      </section>
      <Footer />
    </div>
  )
}
export default TemplateTwo
