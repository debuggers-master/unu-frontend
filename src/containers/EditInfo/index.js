import React from 'react'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'

import _plus from '../..//assets/images/iconPlus.svg'
import './styles.scss'

const EditInfo = () => {
  return (
    <>
      <Layout active='home'>
        <div className='editInfo'>
          <h2>Stark Industries</h2>
          <div className='editInfo-container'>
            <h2>Editar información General - Presentación Iron Man</h2>
            <form>
              <div className='formEdit-container'>
                <div className='formEdit-container-formLeft'>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>Nombre del evento</label>
                    <input
                      type='text'
                      className='formEdit-field__input'
                    />
                  </div>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>Descripción corta del evento</label>
                    <textarea
                      type='text'
                      className='formEdit-field__textarea'
                    />
                  </div>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>Descripción del evento</label>
                    <textarea
                      type='text'
                      className='formEdit-field__textarea2'
                    />
                  </div>
                </div>
                <div className='formEdit-container-formRigth'>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>Título Cabecera</label>
                    <input
                      type='text'
                      className='formEdit-field__input'
                    />
                  </div>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>Imagen del Evento</label>
                    <input
                      id='imgEvent'
                      type='file'
                    />
                    <div className='formEdit-field__file'>
                      <label htmlFor='imgEvent' className='formEdit-field__fileIcon'>
                        <img src={_plus} alt='icono para subir imagen Cabecera' />
                      </label>
                    </div>
                  </div>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>Imagen de la Cabecera</label>
                    <input
                      id='imgHeader'
                      type='file'
                    />
                    <div className='formEdit-field__file'>
                      <label htmlFor='imgHeader' className='formEdit-field__fileIcon'>
                        <img src={_plus} alt='icono para subir imagen Cabecera' />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className='check-action'>
              <Link to='/events/edit/organizationName/eventId'>
                <button className='check-action__btnLeft'>
                  <p>Cancelar</p>
                </button>
              </Link>
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

export default EditInfo
