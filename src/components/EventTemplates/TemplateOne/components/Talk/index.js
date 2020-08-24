import React from 'react'
import styles from './styles.module.scss'
const Talk = props => {
  const {
    name,
    description,
    // startHour,
    // endHour,
    speakerName,
    rol,
    speakerPhoto,
  } = props.data

  return (
    <div className={styles['talk']}>
      <div className={styles['talk__left']}>
        <h2>{name}</h2>
        <h3>{rol}</h3>
        <h3>Hora de inicio y hora final</h3>
        {description}
      </div>
      <div className={styles['talk__right']}>
        <div className={styles['talk__img']}>
          <img src={speakerPhoto} alt={speakerName} />
        </div>
      </div>
    </div>
  )
}
export default Talk
