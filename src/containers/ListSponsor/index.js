import React from 'react'
import Layout from '../../components/Layout'

import { ItemSponsor } from '../../components/ItemSponsor'
import './styles.scss'

const ListSponsor = () => {
  return (
    <>
      <Layout active='home'>
        <div className='editDay'>
          <h2>Stark Industries</h2>
          <div className='editDay-container'>
            <h2>Editar Agenda - Presentación Iron Man</h2>
            <ul>
              <ItemSponsor />
              <ItemSponsor />
              <ItemSponsor />
            </ul>
            <div className='check-action'>
              <button className='check-action__btnLeft'>
                <p>Cancelar</p>
              </button>
              <button className='check-action__btnRight'>
                <p>Guardar</p>
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default ListSponsor
