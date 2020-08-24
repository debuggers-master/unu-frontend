import React from 'react'
import styles from './styles.module.scss'
import Associate from '../Associate'
const Associates = props => {
  return (
    <div className={styles.associates}>
      {props.data.map((associate, index) => (
        <Associate key={index} data={associate} />
      ))}
    </div>
  )
}
export default Associates
