/**
 * Class represents a message.
 *
 * @class Message
 * @param {string} message - The text content of the message.
 * @param {string} username - The username of the author of the message.
 */
export default class Message {
  /**
   * @param {string} message - The text content of the message.
   * @param {string} username - The username of the author of the message.
   */
  constructor(message, username) {
    this.text = message
    this.username = username
    this.timestamp = Date.now()
  }
}
