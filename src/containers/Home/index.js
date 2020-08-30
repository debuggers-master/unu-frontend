import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import _d1 from '../../assets/images/D1.svg'
import _d2 from '../../assets/images/D2.svg'
import _d3 from '../../assets/images/D3.svg'
import _e1 from '../../assets/images/E1.svg'
import _e2 from '../../assets/images/iconCount.svg'
import _e3 from '../../assets/images/iconEmail-white.svg'
import _t1 from '../../assets/images/T1.png'
import _t2 from '../../assets/images/T2.png'
import _t3 from '../../assets/images/T3.png'
import _t4 from '../../assets/images/T4.png'
import BurguerButton from '../../components/BurguerButton'
import './styles.scss'
const Home = () => {
  useEffect(() => {
    window.addEventListener('scroll', console.log)
  })
  return (
    <>
      <Header />
      <BurguerButton typeOf='home' />
      <section className='create-event-section section'>
        <div className='create-event-section__title'>
          <h2>Crea tu evento</h2>
        </div>
      </section>
      <section className='home-section section' id='start'>
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
          parte del evento
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
        <h1>PLUS</h1>
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
                <img src={_e2} alt='caracteristica 2' />
              </div>
              <div className='featuring-section__label'>CONTEO REGRESIVO</div>
            </div>
          </div>
          <div className='featuring-section__card'>
            <div className='featuring-section__container'>
              <div className='featuring-section__image'>
                <img src={_e3} alt='caracteristica 3' />
              </div>
              <div className='featuring-section__label'>EMAILS DIRECTOS</div>
            </div>
          </div>
        </div>
      </section>
      <section className='team-section section' id='team'>
        <h1>EQUIPO<span> The Debbugers</span>
        </h1>
        <div className='team-section__grid'>
          <div className='team-section__card'>
            <div className='team-section__container'>
              <div className='team-section__image'>
                <img src={_t1} alt='foto de Daniel Valderrama' />
              </div>
              <div className='team-section__label'>
                <h4>Miguel de la Rosa</h4>
                <Link to='https://github.com/devacran'>
                  <p>devacran</p>
                </Link>
              </div>
            </div>
          </div>
          <div className='team-section__card'>
            <div className='team-section__container'>
              <div className='team-section__image'>
                <img src={_t2} alt='foto de Daniel Valderrama' />
              </div>
              <div className='team-section__label'>
                <h4>Emanuel Osoario</h4>
                <Link to='https://github.com/emanuelosva'>
                  <p>emanuelosva</p>
                </Link>
              </div>
            </div>
          </div>
          <div className='team-section__card'>
            <div className='team-section__container'>
              <div className='team-section__image'>
                <img src={_t3} alt='foto de Daniel Valderrama' />
              </div>
              <div className='team-section__label'>
                <h4>Mario Barbosa</h4>
                <Link to='https://github.com/mariobarbosa777'>
                  <p>mariobarbosa777</p>
                </Link>
              </div>
            </div>
          </div>
          <div className='team-section__card'>
            <div className='team-section__container'>
              <div className='team-section__image'>
                <img src={_t4} alt='foto de Daniel Valderrama' />
              </div>
              <div className='team-section__label'>
                <h4>Daniel Valderrama</h4>
                <Link to='https://github.com/DanielVM19'>
                  <p>DanielVM19</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
export default Home
