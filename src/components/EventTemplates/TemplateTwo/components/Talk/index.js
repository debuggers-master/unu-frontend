import React from 'react'
import styles from './styles.module.scss'
const Talk = () => {
  return (
    <div className={styles['talk']}>
      <div className={styles['talk__left']}>
        <h2>Nombre de la Charla</h2>
        <h3>Google Developer Expert</h3>
        <h3>Hora de inicio y hora final</h3>
        Es un hecho establecido hace demasiado tiempo que un lector se distraerá
        con el contenido del texto de un sitio mientras que mira su diseño. El
        punto de usar Lorem Ipsum es que tiene una distribución más o menos
        normal de las letras, al contrario de usar textos como por ejemplo "
      </div>
      <div className={styles['talk__right']}>
        <div className={styles['talk__img']}>
          <img alt="nombre de la charla" />
        </div>
      </div>
    </div>
  )
}
export default Talk
