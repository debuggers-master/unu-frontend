/* Issue: when a input field is selected by tabs */
import React, { useState, useEffect } from 'react'

const Form = () => {
  const [clickedField, setClickedField] = useState()

  const handleOutsideClick = evn => {
    if (clickedField) {
      const label = clickedField.getElementsByTagName('label')[0]
      const input = clickedField.getElementsByTagName('input')[0]
      /* eslint-disable */
      const isInactive = evn.target != input
      /* eslint-enable */
      const isFill = input.value
      if (isInactive && !isFill) {
        label.classList.remove('form-field__label--active')
      }
    }
  }
  useEffect(() => {
    window.addEventListener('click', handleOutsideClick)
  }, [handleOutsideClick])

  const handleClick = evn => {
    const formField = evn.currentTarget
    setClickedField(formField)
    const activeLabel = formField.getElementsByTagName('label')[0]
    activeLabel.classList.add('form-field__label--active')
  }
  const handleChange = evn => {
    console.log('change')
  }
  return (
    <>
      <form>
        <div onClick={handleClick} className='form-field'>
          <label className='form-field__label'>Email</label>
          <input type='text' name='email' />
        </div>
        <div
          onClick={handleClick}
          onChange={handleChange}
          className='form-field'
        >
          <label className='form-field__label'>Contraseña</label>
          <input type='text' name='' />
        </div>
        <div className='login__button'>
          <button className='button' type='submit'>
            Login
          </button>
        </div>
      </form>
    </>
  )
}
export default Form
