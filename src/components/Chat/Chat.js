import ChatUI from './ChatUI'

export default class Chat {
  #ui
  #ws

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
  }

  #onSendUsername = ({ detail: { formData } }) => {
    for (const [key, value] of formData.entries()) {
      console.log(key, value)
    }

    this.#ws.send(JSON.stringify(formData))
  }
}
