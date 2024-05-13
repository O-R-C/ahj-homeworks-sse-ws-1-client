import ChatUI from './ChatUI'

export default class Chat {
  #ui
  #ws
  #users = null
  #usersLoaded = false

  constructor(element) {
    this.#ui = new ChatUI(element)
    this.#ws = new WebSocket('ws://localhost:3000/chat')

    this.#init()
  }

  #init() {
    this.#addListeners()
  }

  #addListeners() {
    document.addEventListener('sendUsername', this.#onSendUsername)
    this.#ws.addEventListener('open', this.#onOpenWs)
    this.#ws.addEventListener('close', this.#onCloseWs)
    this.#ws.addEventListener('message', this.#onMessageWs)
  }

  #onOpenWs = () => {
    return
  }

  #onCloseWs = (event) => {
    console.log('🚀 ~ event:', event)
  }

  #onMessageWs = ({ data }) => {
    const { event, payload } = JSON.parse(data)
    console.log('🚀 ~ event:', event)
    console.log('🚀 ~ payload:', payload)

    const handler = `handle${event}`

    console.log('🚀 ~ handler:', handler)
    if (!this[handler]) return

    this[handler](payload)
  }

  handleUsersList = (usersList) => {
    console.log('🚀 ~ usersList:', Array.isArray(usersList))

    if (!this.#users) {
      setTimeout(() => {
        this.#fireLoadedUsers()
      }, 0)
    }

    if (!this.#users || usersList.length !== this.#users.length) {
      this.#updateUsers(usersList)
    }
  }

  handleChat = (chat) => {
    console.log('🚀 ~ message:', chat)
  }

  handleMessage = (message) => {
    console.log('🚀 ~ message:', message)
  }

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
   * Handles the send username event.
   *
   * @param {CustomEvent} event - The send username event.
   * @return {void} No return value.
   */

  #onSendUsername = ({ detail }) => {
    this.#ws.send(JSON.stringify({ username: detail }))
  }

  #getLoadedUsers() {
    return new CustomEvent('loadedUsers', { detail: this.#users })
  }

  #fireLoadedUsers() {
    document.dispatchEvent(this.#getLoadedUsers())
  }
}