import React from 'react'
import _edit from '../../assets/images/iconEdit.svg'

import './styles.scss'

export const CardEvento = (props) => {
  const { name, organizationName } = props
  return (
    <>
      <div className='card'>
        <div className='card-titleOrg'>
          <h3>{organizationName}</h3>
        </div>
        <div className='card-content'>
          <div className='card-content__title'>
            <h3>{name}</h3>
            <img src={_edit} alt='icono editar' />
          </div>
        </div>
      </div>
    </>
  )
}
