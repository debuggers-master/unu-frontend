import React from 'react'
import styles from './styles.module.scss'

const EventHero = props => {
  const { imageEvent, description } = props.data
  return (
    <div className={styles['event-hero']}>
      <div className={styles['event-hero__img']}>
        <img src={imageEvent} alt="nombre del evento" />
      </div>
      <div className={styles['event-hero__description']}>{description}</div>
    </div>
  )
}
export default EventHero
