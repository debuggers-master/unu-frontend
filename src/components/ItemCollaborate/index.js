import React from 'react'

import _trash from '../../assets/images/iconTrash.svg'
import './styles.scss'

export const ItemCollaborator = ({firstName, lastName, email}) => {
  return (
    <>
      <li>
        <div className='item'>
            <div>
              <p className='item-names'>
                {/* {this.props.firstName} {this.props.lastName} */}
                {firstName} {lastName}
              </p>
              <p className='item-email'>
                {/* {this.props.email} */}
                {email}
              </p>
            </div>
            <img src={_trash} alt='icono editar'/>
        </div>
      </li>
      <div className="line">
      </div>
    </>
  )
}
