const emailValidator = email => {
  if (/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/.test(email)) {
    return null
  }
  if (email.trim() === '') {
    return 'Ingresa un email'
  }
  return 'Ingresa un email valido'
}
const nameValidator = name => {
  if (name.trim() === '') {
    return 'Ingresa un nombre'
  }
  return null
}
const passwordValidator = password => {
  console.log(password)
  if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
    return null
  }
  if (password.trim() === '') {
    return 'Ingresa una contraseña'
  }
  return 'Min 6 caracteres, numeros & letras'
}
const passwordConfirmValidator = (pass, confirm) => {
  if (pass === confirm) {
    return null
  }
  return 'Las contraseñas no son iguales'
}

const fieldValidator = ({ field, value, state = {} }) => {
  switch (field) {
    case 'name':
      return nameValidator(value)

    case 'lastName':
      return nameValidator(value)

    case 'email':
      return emailValidator(value)

    case 'password':
      return passwordValidator(value)

    case 'passwordConfirm':
      return passwordConfirmValidator(value, state.password)
    default:
      return 'invalid'
  }
}
export default fieldValidator
