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
      <div>
        <span>
          <span className={styles.countdown__num}>
            <b>{getTimeRemaining(time).days}</b>
          </span>
          Dias
        </span>
        <span>
          <span>
            <b> {getTimeRemaining(time).hours} </b>
          </span>
          Horas
        </span>
        <span>
          <span className={styles.countdown__num}>
            <b>{getTimeRemaining(time).minutes}</b>
          </span>
          Minutos
        </span>
        <span>
          <span className={styles.countdown__num}>
            <b>{getTimeRemaining(time).seconds}</b>
          </span>
          Segundos
        </span>
      </div>
    </div>
  )
}
export default CountDown
