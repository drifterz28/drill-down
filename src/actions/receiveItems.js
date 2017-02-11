const constants = require('../constants')

export function receiveItems(entities, keyword) {
  return {
    type: constants.RECEIVE_PACKAGES,
    entities,
    keyword
  }
};
