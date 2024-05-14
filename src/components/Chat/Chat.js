import ChatUI from './ChatUI'
import firesEvent from '@/js/firesEvent'

export default class Chat {
  #ui
  #ws
  #users = null

  constructor(element, ServerApi) {
    !ServerApi && this.#throwError('Server API is not provided')

    this.#ui = new ChatUI(element)
    this.#ws = new ServerApi('ws://localhost:3000/chat')

    this.#init()
  }

  #init() {
    this.#ws.init()
    this.#addListeners()
  }

  #addListeners() {
    document.addEventListener('registerUser', this.#handleRegisterUser)
    document.addEventListener('loadedUserList', this.#handleUsersList)
  }

  #handleUsersList = ({ detail: { payload: usersList } }) => {
    if (!this.#users) {
      setTimeout(() => {
        firesEvent('loadedUsers', this.#users)
      }, 0)
    }

    if (!this.#users || usersList.length !== this.#users.length) {
      this.#updateUsers(usersList)
    }
  }

  #handleChat = (chat) => {}

  /**
   * Updates the users.
   *
   * @param {string[]} users - The new users.
   * @return {void} No return value.
   */
  #updateUsers(users) {
    this.#users = users
    this.#ui.updateUsers(this.#users)
  }

  /**
   * Handles the register user event.
   *
   * @param {CustomEvent} event - The register user event.
   * @return {void} No return value.
   */
  #handleRegisterUser = ({ detail: { payload: username } }) => {
    this.#ws.send('UserJoin', username)
  }

  /**
   * Throws an error.
   *
   * @param {string} error - The error message.
   * @return {void} No return value.
   * @throws {Error} The error.
   * @private
   */
  #throwError = (error) => {
    throw new Error(error)
  }
}
