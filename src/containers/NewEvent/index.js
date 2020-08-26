import React from 'react'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'

import './styles.scss'

const NewEvent = () => {
  return (
    <>
      <Layout active='home'>
        <div className='editInfo'>
          <h2>Hola! - </h2>
          <div className='editInfo-container'>
            <h2>Cra un nuevo evento</h2>
            <form>
              <div className='formEdit-container'>
                <div className='formEdit-container-formLeft'>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>¿Cúal organización hará el evento?</label>
                    <select
                      className='formEdit-field__select'
                      defaultValue='DEFAULT'
                    >
                      <option value='DEFAULT' disabled />
                      <option value='1:00 am'>1:00 am</option>
                    </select>
                  </div>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>Nombre del evento</label>
                    <input
                      type='text'
                      className='formEdit-field__input'
                    />
                  </div>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label' htmlFor='start'>Fecha del día:</label>
                    <input
                      className='formEdit-field__select'
                      type='date'
                      defaultValue='2020-07-22'
                      min='2020-01-01'
                      max='2020-12-31'
                    />
                  </div>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>Personaliza la URL de tu evento</label>
                    <input
                      type='text'
                      className='formEdit-field__input'
                    />
                  </div>
                </div>
                <div className='formEdit-container-formRigth'>
                  <div className='formEdit-field'>
                    <label className='formEdit-field__label'>Elije una plantilla para tu evento</label>
                    <div className='formEdit-field__fileDos'>
                      <div className='formEdit-container'>
                        <div className='formEdit-content'>
                          <h2>Plantilla 1</h2>
                          <h4>Palegta de color</h4>
                          <div className='paletColor-container'>
                            <div className='paletColor-uno' />
                            <div className='paletColor-dos' />
                            <div className='paletColor-tres' />
                          </div>
                          <h4>Tipografía</h4>
                          <div className='typography'>
                            <p className='typography-NotoSans'>Noto Sans JP</p>
                            <div className='typography-line' />
                            <p className='typography-OpenSans'>Open Sans</p>
                          </div>
                          <h5>Preview Plantilla 1</h5>
                          <input type='checkbox' name='myCheckbox' value='1' onclick='selectOnlyThis(this)' />
                        </div>
                        <div className='formEdit-content'>
                          <h2>Plantilla 2</h2>
                          <h4>Palegta de color</h4>
                          <div className='paletColor-container'>
                            <div className='paletColor-cuatro' />
                            <div className='paletColor-cinco' />
                            <div className='paletColor-seis' />
                          </div>
                          <h4>Tipografía</h4>
                          <div className='typography'>
                            <p className='typography-Raleway'>Raleway</p>
                            <div className='typography-line' />
                            <p className='typography-Roboto'>Roboto</p>
                          </div>
                          <Link TO='#'>
                            <h5>Preview Plantilla 2</h5>
                          </Link>
                        </div>
                      </div>
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

export default NewEvent
