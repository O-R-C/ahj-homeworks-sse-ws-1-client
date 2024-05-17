import moment from 'moment'
import getElement from '@/js/getElement'
import styles from './Message.module.css'

export const Message = ({ username, timestamp, text }) => {
  const messageElement = getElement({ tag: 'div', classes: styles['message'] })
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
