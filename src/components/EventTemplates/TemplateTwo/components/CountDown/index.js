import React, { useState, useEffect } from 'react'
import { getTimeRemaining } from '../../../../../utils/countDown'
import styles from './styles.module.scss'
const CountDown = ({ time }) => {
  const [currentTime, setCurrentTime] = useState() // eslint-disable-line
  useEffect(() => {
    const countDown = setInterval(() => {
      setCurrentTime(Date.now())
    }, 1000)
    return () => clearInterval(countDown)
  })
  return (
    <div className={styles.countdown}>
      <div className={styles.countdown__container}>
        <span className={styles.countdown__num}>
          <b>{getTimeRemaining(time).days}</b>
        </span>
        <span>Dias</span>
        <span className={styles.countdown__num}>
          <b> {getTimeRemaining(time).hours} </b>
        </span>
        <span>Horas</span>
        <span className={styles.countdown__num}>
          <b>{getTimeRemaining(time).minutes}</b>
        </span>
        <span>Minutos</span>
        <span className={styles.countdown__num}>
          <b>{getTimeRemaining(time).seconds}</b>
        </span>
        <span>Segundos</span>
      </div>
    </div>
  )
}
export default CountDown
