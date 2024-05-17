import getElement from '@/js/getElement'
import BaseUI from '@js/Classes/BaseUI'
import UserItem from '@ui/UserItem/UserItem'
import styles from './UserList.module.css'

/**
 * Class represents a User List UI
 *
 * @class UserListUI
 * @extends {BaseUI}
 */
export default class UserListUI extends BaseUI {
  /**
   * Creates the User List app
   *
   * @returns {HTMLElement} - The created app
   */
  createApp() {
    const app = getElement({
      tag: 'ul',
      classes: styles['user-list'],
    })

    return app
  }

  /**
   * Updates the User List UI with the given users
   *
   * @param {string[]} users - The users to update the UI with
   */
  updateUsers(users) {
    this.#clearUsers()

    users.forEach((user) => {
      this.app.append(UserItem(user))
    })
  }

  addCurrentUser() {
    this.app.append(UserItem('You'))
  }

  /**
   * Clears the User List UI
   *
   * @private
   */
  #clearUsers() {
    this.app.innerHTML = ''
  }
}
