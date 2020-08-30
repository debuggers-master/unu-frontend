import React from 'react'

import './styles.scss'

const CrossAnimation = () => {
  return (
    <>
      <div className='Cross'>
        <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 130.2 130.2'>
          <circle className='path circle' fill='none' stroke='#fc1d1d' strokeWidth='6' strokeMiterlimit='10' cx='65.1' cy='65.1' r='62.1' />
          <line className='path line' fill='none' stroke='#fc1d1d' strokeWidth='6' strokeLinecap='round' strokeMiterlimit='10' x1='34.4' y1='37.9' x2='95.8' y2='92.3' />
          <line className='path line' fill='none' stroke='#fc1d1d' strokeWidth='6' strokeLinecap='round' strokeMiterlimit='10' x1='95.8' y1='38' x2='34.4' y2='92.2' />
        </svg>
      </div>
    </>
  )
}

export default CrossAnimation
