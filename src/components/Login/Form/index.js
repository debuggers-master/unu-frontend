/* Issue: when a input field is selected by tabs */
import React from 'react'

const Form = () => {
  return (
    <>
      <form>
        <div className='form-field'>
          <label className='form-field__label'>Email</label>
          <input type='text' name='email' />
        </div>
        <div className='form-field'>
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
