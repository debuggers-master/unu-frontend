import React from 'react'
import styles from './styles.module.scss'
import Associate from '../Associate'
const Associates = props => {
  return (
    <div className={styles.associates}>
      <Associate />
      <Associate />
      <Associate />
      <Associate />
      <Associate />
      <Associate />
    </div>
  )
}
export default Associates
