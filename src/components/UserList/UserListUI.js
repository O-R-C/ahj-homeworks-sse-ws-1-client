import getElement from '@/js/getElement'
import BaseUI from '@/js/BaseUI'
import UserItem from '@ui/UserItem/UserItem'
import styles from './UserList.module.css'

export default class UserListUI extends BaseUI {
  constructor(element) {
    super(element)

    this.#init()
  }

  #init() {}

  createApp() {
    const app = getElement({
      tag: 'ul',
      classes: styles['user-list'],
    })

    return app
  }

  updateUsers(users) {
    this.#clearUsers()

    users.forEach((user) => {
      this.app.append(UserItem(user))
    })
  }

  #clearUsers() {
    this.app.innerHTML = ''
  }
}
