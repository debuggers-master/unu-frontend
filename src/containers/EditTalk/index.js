import React from 'react'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'

import _plus from '../..//assets/images/iconPlus.svg'
import './styles.scss'

const EditTalk = () => {
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
                  <h2>Editar Conferencia</h2>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>Nombre de la conferencia</label>
                    <input
                      type='text'
                      className='formEdit-field__input'
                    />
                  </div>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>Descripción de la conferencia</label>
                    <textarea
                      type='text'
                      className='formEdit-field__textarea'
                    />
                  </div>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>Biografía del conferencista</label>
                    <textarea
                      type='text'
                      className='formEdit-field__textarea'
                    />
                  </div>
                </div>
                <div className='formEdit-container-formRigth'>
                  <div className='formEdit-container'>
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
                    <div>
                      <div className='formEdit-field'>
                        <label className='formEdit-field__label'>Hora inicial</label>
                        <select
                          className='formEdit-field__select'
                          defaultValue='DEFAULT'
                        >
                          <option value='DEFAULT' disabled />
                          <option value={1}>1:00</option>
                          <option value={2}>2:00</option>
                          <option value='3:00 am'>3:00 am</option>
                          <option value='4:00 am'>4:00 am</option>
                          <option value='5:00 am'>5:00 am</option>
                          <option value='6:00 am'>6:00 am</option>
                          <option value='7:00 am'>7:00 am</option>
                          <option value='8:00 am'>8:00 am</option>
                          <option value='9:00 am'>9:00 am</option>
                          <option value='10:00 am'>10:00 am</option>
                          <option value='11:00 am'>11:00 am</option>
                          <option value='12:00 am'>12:00 am</option>
                          <option value='1:00 pm'>1:00 pm</option>
                          <option value='2:00 pm'>2:00 pm</option>
                          <option value='3:00 pm'>3:00 pm</option>
                          <option value='4:00 pm'>4:00 pm</option>
                          <option value='5:00 pm'>5:00 pm</option>
                          <option value='6:00 pm'>6:00 pm</option>
                          <option value='7:00 pm'>7:00 pm</option>
                          <option value='8:00 pm'>8:00 pm</option>
                          <option value='9:00 pm'>9:00 pm</option>
                          <option value='10:00 pm'>10:00 pm</option>
                          <option value='11:00 pm'>11:00 pm</option>
                          <option value='12:00 pm'>12:00 pm</option>
                        </select>
                      </div>
                      <div className='formEdit-field'>
                        <label className='formEdit-field__label'>Hora final</label>
                        <select
                          className='formEdit-field__select'
                          defaultValue='DEFAULT'
                        >
                          <option value='DEFAULT' disabled />
                          <option value='1:00 am'>1:00 am</option>
                          <option value='2:00 am'>2:00 am</option>
                          <option value='3:00 am'>3:00 am</option>
                          <option value='4:00 am'>4:00 am</option>
                          <option value='5:00 am'>5:00 am</option>
                          <option value='6:00 am'>6:00 am</option>
                          <option value='7:00 am'>7:00 am</option>
                          <option value='8:00 am'>8:00 am</option>
                          <option value='9:00 am'>9:00 am</option>
                          <option value='10:00 am'>10:00 am</option>
                          <option value='11:00 am'>11:00 am</option>
                          <option value='12:00 am'>12:00 am</option>
                          <option value='1:00 pm'>1:00 pm</option>
                          <option value='2:00 pm'>2:00 pm</option>
                          <option value='3:00 pm'>3:00 pm</option>
                          <option value='4:00 pm'>4:00 pm</option>
                          <option value='5:00 pm'>5:00 pm</option>
                          <option value='6:00 pm'>6:00 pm</option>
                          <option value='7:00 pm'>7:00 pm</option>
                          <option value='8:00 pm'>8:00 pm</option>
                          <option value='9:00 pm'>9:00 pm</option>
                          <option value='10:00 pm'>10:00 pm</option>
                          <option value='11:00 pm'>11:00 pm</option>
                          <option value='12:00 pm'>12:00 pm</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>URL twitter del conferencista</label>
                    <input
                      type='text'
                      className='formEdit-field__input'
                    />
                  </div>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>Rol del conferencista</label>
                    <input
                      type='text'
                      className='formEdit-field__input'
                    />
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

export default EditTalk
