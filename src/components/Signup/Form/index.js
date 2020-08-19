/* Issue: when a input field is selected by tabs */
import React, { useState, useEffect } from 'react'

const Form = () => {
  const [clickedField, setClickedField] = useState()
  useEffect(() => {
    window.addEventListener('click', evn => {
      if (clickedField) {
        const label = clickedField.getElementsByTagName('label')[0]
        const input = clickedField.getElementsByTagName('input')[0]
        /* eslint-disable */
        const isInactive = evn.target != input;
        /* eslint-enable */
        const isFill = input.value
        if (isInactive && !isFill) {
          label.classList.remove('form-field__label--active')
        }
      }
    })
  }, [clickedField])

  const handleClick = evn => {
    const formField = evn.currentTarget
    setClickedField(formField)
    const activeLabel = formField.getElementsByTagName('label')[0]
    activeLabel.classList.add('form-field__label--active')
  }
  return (
    <>
      <form>
        <div onClick={handleClick} className='form-field'>
          <label className='form-field__label'>Name</label>
          <input type='text' name='' />
        </div>
        <div onClick={handleClick} className='form-field'>
          <label className='form-field__label'>Last Name</label>
          <input type='text' name='' />
        </div>
        <div onClick={handleClick} className='form-field'>
          <label className='form-field__label'>Email</label>
          <input type='text' name='' />
        </div>
        <div onClick={handleClick} className='form-field'>
          <label className='form-field__label'>Contraseña</label>
          <input type='text' name='' />
        </div>
        <div onClick={handleClick} className='form-field'>
          <label className='form-field__label'>Confirmar Contraseña</label>
          <input type='text' name='' />
        </div>
        <div className='signup__button'>
          <button className='button' type='submit'>
            Registrate
          </button>
        </div>
      </form>
    </>
  )
}
export default Form
