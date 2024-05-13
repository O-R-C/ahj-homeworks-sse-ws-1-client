import getElement from '@/js/getElement'
import styles from './RegisterForm.module.css'

/**
 * Creates a registration form with a label, input field, and submit button.
 *
 * @return {HTMLFormElement} The registration form element.
 */
export const RegisterForm = () => {
  const form = getElement({
    tag: 'form',
    name: 'register',
    method: 'dialog',
    classes: styles['register-form'],
  })

  const label = getElement({
    tag: 'label',
    for: 'register-username',
    textContent: 'Выберите псевдоним',
  })

  const inputWrapper = getElement({
    tag: 'div',
    classes: styles['input-wrapper'],
  })

  const errorMessage = getElement({
    tag: 'div',
    classes: styles['error-message'],
  })

  const input = getElement({
    tag: 'input',
    type: 'text',
    name: 'username',
    id: 'register-username',
    placeholder: 'Псевдоним',
    autofocus: true,
  })

  const submit = getElement({
    tag: 'button',
    type: 'submit',
    value: 'Продолжить',
    textContent: 'Продолжить',
  })

  inputWrapper.append(input, errorMessage)
  form.append(label, inputWrapper, submit)

  return form
}

export default RegisterForm
