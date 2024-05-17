import moment from 'moment'
import getElement from '@/js/getElement'
import styles from './Message.module.css'

/**
 * Creates a message element with username, timestamp, and text content.
 *
 * @param {string} username - The username for the message.
 * @param {string} timestamp - The timestamp of the message.
 * @param {string} text - The text content of the message.
 * @return {HTMLElement} The created message element.
 */
export const Message = ({ username, timestamp, text }) => {
  const messageElement = getElement({ tag: 'div', classes: [styles.message] })
  username === 'You' && messageElement.classList.add(styles.you)

  const description = `${username}, ${moment(timestamp).format('HH:mm DD.MM.YYYY')}`
  const descriptionElement = getElement({
    tag: 'div',
    classes: styles.description,
    textContent: description,
  })

  const textElement = getElement({
    tag: 'div',
    classes: styles.text,
    textContent: text,
  })

  messageElement.append(descriptionElement, textElement)

  return messageElement
}

export default Message
