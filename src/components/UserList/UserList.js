import UserListUI from './UserListUI'

/**
 * Class represents a User List component
 *
 * @class UserList
 * @property {UserListUI} #ui
 */
export default class UserList {
  #ui
  #currentUser = null

  /**
   * Creates an instance of UserList
   *
   * @param {HTMLElement} element - The element where the component will be rendered
   */
  constructor(element) {
    this.#ui = new UserListUI(element)

    this.#init()
  }

  /**
   * Initializes the component
   *
   * @private
   */
  #init() {
    this.#addListeners()
  }

  /**
   * Adds event listeners to the component
   *
   * @private
   */
  #addListeners() {
    document.addEventListener('loadedUserList', this.#onLoadedUserList)
    document.addEventListener('setCurrentUser', this.#onSetCurrentUser)
  }

  /**
   * Handles the "loadedUserList" event
   *
   * @param {CustomEvent} event - The event object
   * @private
   */
  #onLoadedUserList = ({ detail: { payload: userList } }) => {
    const users = userList.filter((user) => user !== this.#currentUser)
    this.#ui.updateUsers(users)
    this.#currentUser && this.#ui.addCurrentUser()
  }

  /**
   * Handles the "setCurrentUser" event
   *
   * @param {CustomEvent} event - The event object
   * @private
   */
  #onSetCurrentUser = ({ detail: { payload: user } }) => {
    this.#currentUser = user
  }
}
