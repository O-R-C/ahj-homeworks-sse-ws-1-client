import BaseUI from '@/js/Classes/BaseUI'
import getElement from '@/js/getElement'
import RegisterForm from '../ui/RegisterForm/RegisterForm'
import styles from './RegisterDialog.module.css'

export default class RegisterDialogUI extends BaseUI {
  constructor(element) {
    super(element)

    this.#init()
  }

  #init() {
    this.inputUserName = this.app.querySelector('input[name="username"]')
  }
  /**
   * Creates the app element.
   *
   * @return {HTMLElement} The created app element.
   */
  createApp() {
    const app = getElement({
      tag: 'dialog',
      name: 'register',
      classes: styles['register-dialog'],
    })

    app.append(RegisterForm())

    return app
  }

  /**
   * Shows the modal dialog.
   *
   * @return {void} No return value.
   */
  showModal() {
    this.app.showModal()
  }

  /**
   * Hides the modal dialog by closing the app.
   *
   * @return {void} No return value.
   */
  hideModal() {
    this.app.close()
  }

  showEmptyUsernameError() {
    this.resetUsername()
    this.inputUserName.setCustomValidity('Псевдоним не может быть пустой строкой')
    this.inputUserName.reportValidity()
  }

  hideEmptyUsernameError() {
    this.inputUserName.setCustomValidity('')
  }

  resetUsername() {
    this.inputUserName.value = ''
  }
}
