import React from 'react'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'

import _plus from '../..//assets/images/iconPlus.svg'
import './styles.scss'

const NewOrg = () => {
  return (
    <>
      <Layout active='home'>
        <div className='newEvent'>
          <h2>Nueva Organización</h2>
          <div className='newEvent-container'>
            <div className='newEvent-container__card'>
              <form>
                <div className='formEdit-container'>
                  <div className='formEdit-container-formLeft'>
                    <div className='formEdit-field'>
                      <label className='formEdit-field__label'>Nombre de la organización</label>
                      <input
                        type='text'
                        className='formEdit-field__input'
                      />
                    </div>
                  </div>
                  <div className='formEdit-container-formRigth'>
                    <div className='formEdit-field'>
                      <label className='formEdit-field__label'>Logo de la organización</label>
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
                <div className='check-action'>
                  <Link to='/dashboard'>
                    <button className='check-action__btnLeft'>
                      <p>Cancelar</p>
                    </button>
                  </Link>
                  <button className='check-action__btnRight'>
                    <p>Crear</p>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default NewOrg
