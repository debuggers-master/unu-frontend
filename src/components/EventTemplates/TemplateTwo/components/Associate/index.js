import React from 'react'
import styles from './styles.module.scss'
const Associate = props => {
  return (
    <div className={styles.associate}>
      <div className={styles.associate__img}>
        <img alt='nombre del asociado' />
      </div>
      <div className={styles.associate__name}>Asociados</div>
    </div>
  )
}
export default Associate
