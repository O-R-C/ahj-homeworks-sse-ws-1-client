import getElement from '@/js/getElement'
import styles from './RegisterForm.module.css'

export const RegisterForm = () => {
  const form = getElement({
    tag: 'form',
    method: 'dialog',
    classes: styles['register-form'],
  })

  const label = getElement({
    tag: 'label',
    for: 'register-username',
    textContent: 'Выберите псевдоним',
  })

  const input = getElement({
    tag: 'input',
    type: 'text',
    name: 'username',
    id: 'register-username',
    placeholder: 'Псевдоним',
  })

  const submit = getElement({
    tag: 'button',
    type: 'submit',
    value: 'Продолжить',
    textContent: 'Продолжить',
  })

  form.append(label, input, submit)

  return form
}

export default RegisterForm
