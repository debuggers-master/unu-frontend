import React from 'react'
import Layout from '../../components/Layout'
import './styles.scss'

const EditDate = () => {
  return (
    <>
      <Layout active='home'>
        <div className='newEvent'>
          <h2>Nuevo Organización</h2>
          <div className='newEvent-container'>
            <div className='newEvent-container__card'>
              <form>
                <div className='formEdit-field'>
                  <label className='formEdit-field__label'>
                    <h3>
                      Nombre de la organización
                    </h3>
                  </label>
                  <input
                    type='text'
                    className='formEdit-field__input'
                  />
                </div>
              </form>
              <div className='check-action'>
                <button className='check-action__btnLeft'>
                  <p>Eliminar</p>
                </button>
                <button className='check-action__btnRight'>
                  <p>Publicar</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default EditDate
