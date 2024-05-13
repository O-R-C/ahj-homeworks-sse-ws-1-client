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

  /**
   * Shows an error message for an empty username input.
   *
   * @return {void} No return value.
   */
  showEmptyUsernameError() {
    this.resetUsername()
    this.inputUserName.setCustomValidity('Псевдоним не может быть пустой строкой')
    this.inputUserName.reportValidity()
  }

  /**
   * Hides the error message for an empty username by resetting the custom validity of the input element.
   *
   * This function sets the custom validity of the input element with the id 'inputUserName' to an empty string,
   * effectively hiding the error message for an empty username.
   *
   * @return {void} This function does not return anything.
   */
  hideEmptyUsernameError() {
    this.inputUserName.setCustomValidity('')
  }

  /**
   * Resets the value of the inputUserName field to an empty string.
   *
   * @return {void} No return value.
   */
  resetUsername() {
    this.inputUserName.value = ''
  }
}
