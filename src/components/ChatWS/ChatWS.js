import ChatWSUI from './ChatWSUI'
import firesEvent from '@/js/firesEvent'

/**
 * Class represents a Chat
 *
 * @class Chat
 */
export default class ChatWS {
  #ui
  #ws
  #user = null
  #users = null

  constructor(element, ServerApi) {
    !ServerApi && this.#throwError('Server API is not provided')

    this.#ui = new ChatWSUI(element)
    this.#ws = new ServerApi('ws://localhost:3000/chat')

    this.#init()
  }

  /**
   * Initializes the class.
   */
  #init() {
    this.#ws.init()
    this.#addListeners()
    !this.#user && this.#ui.showRegisterDialog()
  }

  /**
   * Adds event listeners.
   *
   * @return {void} No return value.
   */
  #addListeners() {
    document.addEventListener('registerUser', this.#handleRegisterUser)
    document.addEventListener('loadedUserList', this.#handleUsersList)
    document.addEventListener('sendMessage', this.#handleSendMessage)
  }

  #getPayload(event) {
    return event.detail.payload
  }

  /**
   * Handles the users list event.
   *
   * @param {CustomEvent} event - The users list event.
   * @return {void} No return value.
   */
  #handleUsersList = (event) => {
    const usersList = this.#getPayload(event)

    if (!this.#users || usersList.length !== this.#users.length) {
      this.#updateUsers(usersList)
      setTimeout(() => firesEvent('loadedUsers', this.#users), 0)
    }
  }

  /**
   * Updates the users.
   *
   * @param {string[]} users - The new users.
   * @return {void} No return value.
   */
  #updateUsers(users) {
    this.#users = users
  }

  /**
   * Handles the register user event.
   *
   * @param {CustomEvent} event - The register user event.
   * @return {void} No return value.
   */
  #handleRegisterUser = (event) => {
    const username = this.#getPayload(event)
    this.#ws.send('UserJoin', username)
    this.#user = username
    firesEvent('setCurrentUser', this.#user)
  }

  /**
   * Handles the send message event.
   *
   * @param {CustomEvent} event - The send message event.
   * @return {void} No return value.
   */
  #handleSendMessage = (event) => {
    const message = this.#getPayload(event)
    this.#ws.send('Chat', { ...message, username: this.#user })
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
