import React from 'react'
import styles from './styles.module.scss'
import CountDown from '../CountDown'
const Banner = props => {
  const { imageHeader } = props.data
  const startDate = new Date(props.data.startDate)
  const endDate = new Date(props.data.startDate)
  const str = () => {
    const startMonth = startDate.toLocaleString('es-MX', { month: 'long' })
    const startDay = startDate.toLocaleString('es-MX', { day: 'numeric' })
    const endDay = endDate.toLocaleString('es-MX', { day: 'numeric' })
    const endMonth = endDate.toLocaleString('es-MX', { month: 'long' })
    if (startMonth === endMonth) {
      return `Del ${startDay} al ${endDay} de ${endMonth}`
    }
  }
  return (
    <div className={styles.banner}>
      <div className={styles.banner__img}>
        <img src={imageHeader} alt={props.event_title} />
      </div>
      <div className={styles.banner__container}>
        <div className={styles.banner__title}>
          <h1>{props.event_title || 'Platzi Conf'}</h1>
        </div>
        <CountDown time={startDate} />
        <div className={styles.banner__days}>{str()}</div>
      </div>
    </div>
  )
}
export default Banner
