import React from 'react'
import styles from './styles.module.scss'

const Banner = props => {
  const { imageHeader } = props.data
  return (
    <div className={styles.banner}>
      <div className={styles.banner__container}>
        <div className={styles.banner__img}>
          <img src={imageHeader} alt={props.event_title} />
        </div>
        <div className={styles.banner__title}>
          <h1>{props.event_title || 'Platzi Conf'}</h1>
        </div>
        <div className={styles.banner__countdown}>
          <div>
            <span>
              <b>000</b>Dias
            </span>
            <span>
              <b>00</b>Horas
            </span>
            <span>
              <b>00</b>Minutos
            </span>
            <span>
              <b>00</b>Segundos
            </span>
          </div>
        </div>
        <div className={styles.banner__days}>Dias 00, 00 y 00 del Mes</div>
      </div>
    </div>
  )
}
export default Banner
//event_title
