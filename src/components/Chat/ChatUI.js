import BaseUI from '@/js/Classes/BaseUI'
import getElement from '@/js/getElement'
import RegisterDialog from '../RegisterDialog/RegisterDialog'

import styles from './Chat.module.css'

/**
 * Class represents a Chat UI
 *
 * @class ChatUI
 */
export default class ChatUI extends BaseUI {
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
    this.showRegisterDialog()
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

    this.registerDialog = new RegisterDialog(app)

    app.append()

    return app
  }

  /**
   * Shows the register dialog.
   */
  showRegisterDialog() {
    this.registerDialog.showModal()
  }

  updateUsers(users) {
    console.log('🚀 ~ users:', users)
    console.log('🚀 ~ users:', Array.isArray(users))
  }
}
