import React from 'react'
import Layout from '../../components/Layout'

import  {ItemTalk} from '../../components/ItemTalk'
import './styles.scss'

const EditDay = () => {
  return (
    <>
      <Layout active={'home'}>
        <div className='editSchedule'>
          <h2>Stark Industries</h2>
          <div className='editSchedule-container'>
              <h2>Editar Agenda - Presentación Iron Man</h2>
                <ul>
                  <ItemTalk/>
                  <ItemTalk/>
                  <ItemTalk/>
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

export default EditDay
