import React from 'react'
import Header from '../../components/Header'
import './styles.scss'
const Home = () => {
  return (
    <>
      <Header />
      <div className='hero-home'>
        <div>
          <h1>
            “Cuando se abren las puertas de la comunicación, todo es posible”
          </h1>
          <div className='hero-home__button'>
            <button className='button button--lg button--shape'>Login</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home
