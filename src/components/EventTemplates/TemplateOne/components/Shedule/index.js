import React from 'react'
import styles from './styles.module.scss'
import Talk from '../Talk'
const Shedule = props => {
  const { conferences } = props.data
  console.log(conferences)
  return (
    <section className={styles['shedule-section']}>
      <h2 className={styles['shedule-section__title']}>
        <span>Dia 1</span>
        <span>00 de mes</span>
      </h2>
      <div>
        {conferences.map(conference => (
          <Talk data={conference} key={conference.conferenceId} />
        ))}
      </div>
    </section>
  )
}
export default Shedule
