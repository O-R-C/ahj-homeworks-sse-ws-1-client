import getElement from '@/js/getElement'
import styles from './UserItem.module.css'

export const UserItem = (userName) => {
  const userItem = getElement({
    tag: 'li',
    classes: styles.userItem,
  })

  const avatar = getElement({
    tag: 'div',
    classes: styles.avatar,
  })

  const name = getElement({
    tag: 'div',
    classes: styles.name,
    textContent: userName,
  })

  userItem.append(avatar, name)

  return userItem
}

export default UserItem
