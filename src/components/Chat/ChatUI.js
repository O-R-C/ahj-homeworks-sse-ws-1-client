import BaseUI from '@/js/Classes/BaseUI'
import getElement from '@/js/getElement'
import Message from '@ui/Message/Message'

import styles from './Chat.module.css'

/**
 * Class representing a Chat UI
 *
 * @class ChatUI
 * @extends {BaseUI}
 */
export default class ChatUI extends BaseUI {
  /**
   * Creates the app element
   *
   * @returns {HTMLElement} The created app element
   */
  createApp() {
    const app = getElement({
      tag: 'div',
      classes: [styles.chat],
    })

    this.messages = getElement({
      tag: 'div',
      classes: [styles.messages],
    })

    this.input = getElement({
      tag: 'input',
      classes: [styles.input],
    })

    app.append(this.messages, this.input)

    return app
  }

  /**
   * Updates the chat with new messages
   *
   * @param {Array<Object>} chat - Array of messages
   */
  updateChat(chat) {
    this.#clearChat()

    chat.forEach((message) => {
      this.messages.append(this.#createMessage(message))
    })
  }

  /**
   * Clears the chat
   *
   * @private
   */
  #clearChat() {
    this.messages.innerHTML = ''
  }

  /**
   * Creates a message element with username, timestamp, and text content
   *
   * @param {Object} message - Message object
   * @returns {HTMLElement} The created message element
   *
   * @private
   */
  #createMessage(message) {
    return Message(message)
  }

  /**
   * Appends a message to the chat
   *
   * @param {Object} message - Message object
   */
  appendMessage(message) {
    this.messages.append(this.#createMessage(message))
  }
}
