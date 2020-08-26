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
              <p>Añadir Asociado</p>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default ListSponsor
