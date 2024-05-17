import getElement from '@/js/getElement'
import styles from './UserItem.module.css'

/**
 * Creates a User Item element with the provided userName.
 *
 * @param {string} userName - The name of the user for the User Item
 * @return {HTMLElement} The created User Item element
 */
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
  userName === 'You' && userItem.classList.add(styles.you)

  userItem.append(avatar, name)

  return userItem
}

export default UserItem
