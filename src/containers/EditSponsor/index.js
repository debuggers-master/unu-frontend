import React from 'react'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'

import _plus from '../..//assets/images/iconPlus.svg'
import './styles.scss'

const EditSponsor = () => {
  return (
    <>
      <Layout active='home'>
        <div className='editInfo'>
          <h2>Stark Industries</h2>
          <div className='editInfo-container'>
            <h2>Editar asociados - Presentación Iron Man</h2>
            <form>
              {/* <form onSubmit={this.props.onSubmit}> */}
              <div className='formEdit-container'>
                <div className='formEdit-container-formLeft'>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>Nombre del Asociado</label>
                    <input
                      type='text'
                      className='formEdit-field__input'
                    />
                  </div>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>Url del asociado</label>
                    <input
                      type='text'
                      className='formEdit-field__input'
                    />
                  </div>
                </div>
                <div className='formEdit-container-formRigth'>
                  <div className='formEdit-container'>
                    <div className='formEdit-field'>
                      <label className='formEdit-field__label'>Logo o imagen del asociado</label>
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
              </div>
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
            </form>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default EditSponsor
