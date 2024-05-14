/**
 * Fires an event
 *
 * @param {string} event - Event name
 * @param {Object} payload - Event payload
 * @private
 */
export const firesEvent = (event, payload, element = document) => {
  element.dispatchEvent(createCustomEvent(event, payload))
}

/**
 * Creates a CustomEvent with the given name and payload
 *
 * @param {string} event - Event name
 * @param {Object} payload - Event payload
 * @private
 * @event
 */
const createCustomEvent = (event, payload) => {
  return new CustomEvent(event, {
    detail: {
      payload,
    },
  })
}

export default firesEvent
