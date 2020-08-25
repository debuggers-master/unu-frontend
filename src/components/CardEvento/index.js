import React from 'react'
import _edit from '../../assets/images/iconEdit.svg'

import './styles.scss'

export const CardEvento = () => {
  return (
    <>
      <div className='card'>
        <div className='card-titleOrg'>
          <h3>Stark Industries</h3>
        </div>
        <div className='card-content'>
          <div className='card-content__title'>
            <h3>Presentación Iron Man</h3>
            <img src={_edit} alt='icono editar'/>
          </div>
          <div className='card-content__paragraph'>
            <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
