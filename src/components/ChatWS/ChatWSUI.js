import BaseUI from '@/js/Classes/BaseUI'
import getElement from '@/js/getElement'
import Chat from '../Chat/Chat'
import UserList from '../UserList/UserList'
import RegisterDialog from '../RegisterDialog/RegisterDialog'

import styles from './ChatWS.module.css'

/**
 * Class represents a Chat UI
 *
 * @class ChatUI
 */
export default class ChatWSUI extends BaseUI {
  /**
   * Constructs a new instance of the class.
   *
   * @param {element} element - The element to initialize the class with.
   */
  constructor(element) {
    super(element)

    this.#init()
  }

  /**
   * Initializes the class.
   */
  #init() {
    this.#addElements()
  }

  /**
   * Creates the app element.
   *
   * @returns {HTMLElement} - The created app element.
   */
  createApp() {
    const app = getElement({
      tag: 'div',
      classes: styles.chat,
    })

    this.userListContainer = getElement({
      tag: 'div',
      classes: styles['user-list-container'],
    })

    this.chatContainer = getElement({
      tag: 'div',
      classes: styles['chat-container'],
    })

    app.append(this.userListContainer, this.chatContainer)

    return app
  }

  /**
   * Adds elements to the app.
   */
  #addElements() {
    this.registerDialog = new RegisterDialog(this.app)
    this.userList = new UserList(this.userListContainer)
    this.chat = new Chat(this.chatContainer)
  }

  /**
   * Shows the register dialog.
   */
  showRegisterDialog() {
    this.registerDialog.showModal()
  }
}
