import moment from 'moment/moment'
import BaseUI from '@/js/Classes/BaseUI'
import getElement from '@/js/getElement'
import Message from '@ui/Message/Message'

import styles from './Chat.module.css'

export default class ChatUI extends BaseUI {
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

  updateChat(chat) {
    this.#clearChat()

    chat.forEach((message) => {
      this.messages.append(this.#createMessage(message))
    })
  }

  #clearChat() {
    this.messages.innerHTML = ''
  }

  #createMessage(message) {
    console.log('🚀 ~ message:', message)
    return Message(message)
  }
}
