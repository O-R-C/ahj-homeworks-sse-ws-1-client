import UserListUI from './UserListUI'

export default class UserList {
  #ui
  constructor(element) {
    this.#ui = new UserListUI(element)

    this.#init()
  }

  #init() {
    this.#addListeners()
  }

  #addListeners() {
    document.addEventListener('loadedUserList', this.#onLoadedUserList)
  }

  #onLoadedUserList = (event) => {
    this.#ui.updateUsers(event.detail)
  }
}
