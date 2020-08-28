import React from 'react'

import './styles/Modal.css'

const CheckAnimation = () => {
  return (
    <div class='success-checkmark'>
      <div class='check-icon'>
        <span class='icon-line line-tip' />
        <span class='icon-line line-long' />
        <div class='icon-circle' />
        <div class='icon-fix' />
      </div>
    </div>
  )
}

export default CheckAnimation
