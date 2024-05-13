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
    this.errorUserName = this.app.querySelector('div[class^="error-message"]')
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

    this.errorUserName.textContent = 'Псевдоним не может быть пустой строкой'
  }

  /**
   * Hides the custom error message for the inputUserName field.
   *
   * @return {void} No return value.
   */
  hideCustomError() {
    this.errorUserName.textContent = ''
  }

  /**
   * Resets the value of the inputUserName field to an empty string.
   *
   * @return {void} No return value.
   */
  resetUsername() {
    this.inputUserName.value = ''
    this.inputUserName.focus()
  }

  /**
   * Shows an error message for a duplicate username input.
   *
   * @return {void} No return value
   */
  showDuplicateUsernameError() {
    this.errorUserName.textContent = 'Пользователь с таким псевдонимом уже зарегистрирован'
    this.inputUserName.focus()
  }
}
