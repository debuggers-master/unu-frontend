import React from 'react'
import _twitterIcon from '../../../../../assets/images/twitter.png'
import styles from './styles.module.scss'

const Meet = props => {
  const containerClassName = `${styles['meet']} ${styles[props.styleType] ||
    ''}`
  const { speakerName, rol, speakerBio, twitter, speakerPhoto } = props.data
  return (
    <div className={containerClassName}>
      <div className={styles['meet__left']}>
        <div className={styles['meet__img']}>
          <img src={speakerPhoto} alt="nombre de la conferencia" />
        </div>
      </div>
      <div className={styles['meet__right']}>
        <div className={styles['meet__title']}>
          <h2>{speakerName}</h2>
          <a href={twitter}>
            <img src={_twitterIcon} alt="twitter icon"></img>
          </a>
        </div>
        <h3>{rol}</h3>
        {speakerBio}
      </div>
    </div>
  )
}
export default Meet
