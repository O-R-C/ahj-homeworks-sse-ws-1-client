import Message from '@/js/Classes/Message.js'
import ChatUI from './ChatUI.js'
import firesEvent from '@/js/firesEvent.js'

/**
 * Class represents a Chat
 *
 * @class Chat
 */
export default class Chat {
  /**
   * The UI of the chat
   *
   * @private
   * @type {ChatUI}
   * @memberof Chat
   */
  #ui

  /**
   * Constructs a new instance of the class.
   *
   * @param {HTMLElement} element - The element to initialize the class with.
   */
  constructor(element) {
    this.#ui = new ChatUI(element)

    this.#init()
  }

  /**
   * Initializes the chat.
   *
   * @private
   * @returns {void}
   * @memberof Chat
   */
  #init() {
    this.#addListeners()
  }

  /**
   * Adds listeners to the chat.
   *
   * @private
   * @returns {void}
   * @memberof Chat
   */
  #addListeners() {
    document.addEventListener('loadedChat', this.#handleLoadedChat)
    document.addEventListener('loadedMessage', this.#handleLoadedMessage)
    this.#ui.input.addEventListener('keypress', this.#handleKeyPress)
  }

  /**
   * Handles the "loadedChat" event.
   *
   * @param {CustomEvent} event - The event.
   * @returns {void}
   * @memberof Chat
   */
  #handleLoadedChat = (event) => {
    const { payload: chat } = event.detail

    this.#ui.updateChat(chat)
  }

  #handleLoadedMessage = (event) => {
    const { payload: message } = event.detail
    this.#ui.appendMessage(message)
  }

  /**
   * Handles the "keypress" event.
   *
   * @param {KeyboardEvent} event - The event.
   * @returns {void}
   * @memberof Chat
   */
  #handleKeyPress = (event) => {
    if (event.key !== 'Enter') return

    event.preventDefault()

    const message = this.#ui.input.value.trim()

    if (!message) return

    this.#ui.input.value = ''

    this.#sendMessage(message)
  }

  /**
   * Sends a message to the server.
   *
   * @param {string} message - The message to send.
   * @returns {void}
   * @memberof Chat
   * @fires sendMessage
   */
  #sendMessage(message) {
    const newMessage = new Message(message, 'You')
    this.#ui.appendMessage(newMessage)
    firesEvent('sendMessage', newMessage)
  }
}
