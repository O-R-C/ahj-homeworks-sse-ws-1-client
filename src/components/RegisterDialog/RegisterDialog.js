import RegisterDialogUI from './RegisterDialogUI'

/**
 * A class for handling the register dialog.
 */
export default class RegisterDialog {
  #ui

  /**
   * Constructs a new instance of the class.
   *
   * @param {HTMLElement} element - The element to initialize the class with.
   */
  constructor(element) {
    this.#ui = new RegisterDialogUI(element)

    this.#init()
  }

  /**
   * Initializes the class.
   */
  #init() {
    this.#addListeners()
  }

  /**
   * Adds event listeners.
   *
   * @return {void} No return value.
   */
  #addListeners() {
    this.#ui.app.addEventListener('submit', this.#onSubmit)
    this.#ui.app.addEventListener('keydown', this.#onKeydown)
  }

  /**
   * Handles the submit event.
   *
   * @param {SubmitEvent} event - The submit event.
   * @return {void} No return value.
   */
  #onSubmit = (event) => {
    event.preventDefault()

    const username = this.#getTrimmedUsername()

    if (!username) {
      this.#ui.showEmptyUsernameError()
      return
    }

    this.#fireSendUsername(new FormData(event.target))
    this.#ui.resetUsername()
    this.#ui.hideModal()
  }

  /**
   * Handles the keydown event.
   *
   * @param {KeyboardEvent} event - The keydown event.
   * @return {void} No return value.
   */
  #onKeydown = (event) => {
    if (event.key === 'Escape') {
      event.preventDefault()
    }

    this.#ui.hideEmptyUsernameError()
    return
  }

  /**
   * Shows the modal dialog.
   *
   * @return {void} No return value.
   */
  showModal() {
    this.#ui.showModal()
  }

  /**
   * Gets the send username event.
   *
   * @param {FormData} formData - The form data.
   * @return {CustomEvent} The send username event.
   */
  #getSendUsernameEvent(formData) {
    return new CustomEvent('sendUsername', {
      detail: {
        formData,
      },
    })
  }

  /**
   * Fires the send username event.
   *
   * @param {FormData} formData - The form data.
   * @return {void} No return value.
   */
  #fireSendUsername(formData) {
    document.dispatchEvent(this.#getSendUsernameEvent(formData))
  }

  /**
   * Gets the trimmed username.
   *
   * @return {string} The trimmed username.
   */
  #getTrimmedUsername() {
    return this.#ui.inputUserName.value.trim()
  }
}
