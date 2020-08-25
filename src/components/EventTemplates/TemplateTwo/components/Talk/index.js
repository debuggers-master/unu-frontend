import React from 'react'
import styles from './styles.module.scss'
const Talk = props => {
  const { name, description, speakerName, rol, speakerPhoto } = props.data
  // startHour,
  // endHour,
  const startHour = new Date(props.data.startHour).toLocaleString('en-US', {
    hour12: true,
    hour: '2-digit'
  })
  const endHour = new Date(props.data.endHour).toLocaleString('en-US', {
    hour12: true,
    hour: '2-digit'
  })
  return (
    <div className={styles.talk}>
      <div className={styles.talk__left}>
        <h2>{name}</h2>
        <h3>{rol}</h3>
        <h3>
          {startHour} - {endHour}
        </h3>
        {description}
      </div>
      <div className={styles.talk__right}>
        <div className={styles.talk__img}>
          <img src={speakerPhoto} alt={speakerName} />
        </div>
      </div>
    </div>
  )
}
export default Talk
