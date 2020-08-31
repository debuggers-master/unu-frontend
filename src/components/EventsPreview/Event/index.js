import React from 'react'

import './styles.scss'
const Event = props => {
  const info = props.info || {}
  console.log(props.info)
  const containerClassName = `event__container ${props.styleType || ''}`
  return (
    <a href={`unu.vercel.app/events/${
      info.organizationName
    }/${info.name.replace(/ /g, '-')}`}
    >
      <div className='event'>
        <div className={containerClassName}>
          <div className='event__left'>
            <div className='event__image'>
              <img src={info.imageEvent} alt='Preview del evento' />
            </div>
          </div>
          <div className='event__right'>
            <div className='event__title'>
              <h2>{info.name}</h2>
            </div>
            <div className='event__description'>{info.shortDescription}</div>
            <div className='event__label'>
              <span>Organiza</span>
              <span>{info.organizationName}</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}
export default Event
