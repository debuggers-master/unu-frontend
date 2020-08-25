import React from 'react'
import styles from './styles.module.scss'
const Associate = props => {
  const { name, url, logo } = props.data
  return (
    <div className={styles.associate}>
      <div className={styles.associate__img}>
        <img src={logo} alt='nombre del asociado' />
      </div>
      <div className={styles.associate__name}>
        <a href={url}>{name}</a>
      </div>
    </div>
  )
}
export default Associate
