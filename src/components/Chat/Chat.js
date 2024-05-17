import ChatUI from './ChatUI.js'

export default class Chat {
  #ui

  constructor(element) {
    this.#ui = new ChatUI(element)

    this.#init()
  }

  #init() {
    this.#addListeners()
  }

  #addListeners() {
    document.addEventListener('loadedChat', this.#handleLoadedChat)
  }

  #handleLoadedChat = (event) => {
    const { payload: chat } = event.detail

    this.#ui.updateChat(chat)
  }
}
