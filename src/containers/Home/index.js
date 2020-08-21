import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import _d1 from '../../assets/images/D1.svg'
import _d2 from '../../assets/images/D2.svg'
import _d3 from '../../assets/images/D3.svg'
import _e1 from '../../assets/images/E1.svg'
import './styles.scss'
const Home = () => {
  return (
    <>
      <Header />
      <section className='create-event-section section'>
        <div className='create-event-section__title'>
          <h2>Crea tu evento</h2>
        </div>
      </section>
      <section className='home-section section'>
        <div className='hero-home'>
          <div>
            <h1>
              “Cuando se abren las puertas de la comunicación, todo es posible”
            </h1>
            <div className='hero-home__button'>
              <Link to='/signup'>
                <button className='button button--lg button--shape'>
                  Registrate
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className='firstStep-section section'>
        <div className='firstStep-section__title'>
          <h2>
            <span>#1 </span>Registra tu organizacion o empresa
          </h2>
        </div>
      </section>
      <section className='colaborators-section section'>
        <div>
          <h2>
            AÑADE
            <br />
            <span>Colaboradores a tu evento</span>
          </h2>
        </div>
        <div>
          Con Unu no hay de que preocuparse si es un evento muy grande, o si se
          va a hacer en disitintas partes, pues podrás añadir a tu aquipo como
          parte de
        </div>
      </section>
      <section className='choose-design-section section'>
        <div className='choose-design-section__container'>
          <div className='choose-design-section__title'>
            <h2>ELIGE UN DISEÑO</h2>
          </div>
          <div className='choose-design-section__grid'>
            <div>
              <img src={_d1} alt='diseño1' />
            </div>
            <div>
              <img src={_d2} alt='diseño2' />
            </div>
            <div>
              <img src={_d3} alt='diseño3' />
            </div>
          </div>
        </div>
      </section>
      <section className='featuring-section section'>
        <div className='featuring-section__grid'>
          <div className='featuring-section__card'>
            <div className='featuring-section__container'>
              <div className='featuring-section__image'>
                <img src={_e1} alt='caracteristica 1' />
              </div>
              <div className='featuring-section__label'>RECORDATORIOS</div>
            </div>
          </div>
          <div className='featuring-section__card'>
            <div className='featuring-section__container'>
              <div className='featuring-section__image'>
                <img src={_e1} alt='caracteristica 2' />
              </div>
              <div className='featuring-section__label'>RECORDATORIOS</div>
            </div>
          </div>
          <div className='featuring-section__card'>
            <div className='featuring-section__container'>
              <div className='featuring-section__image'>
                <img src={_e1} alt='caracteristica 3' />
              </div>
              <div className='featuring-section__label'>RECORDATORIOS</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
export default Home
