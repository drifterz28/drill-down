import { GET_ITEMS, SELECTED } from '../constants'

export const items = function(state = [], action) {
  switch (action.type) {
    case GET_ITEMS:
      const { items } = action
      return Object.assign([], state, items);
      break;
    default:
      return state;
  }
};

export const options = function(state = [], action) {
  switch (action.type) {
    case GET_ITEMS:
      const { options } = action
      return Object.assign([], state, options);
      break;
    default:
      return state;
  }
};

export const selected = function(state = {}, action) {
  console.log('action', {action})
  switch (action.type) {
  case SELECTED:
      return action.selected;
      break;
    default:
      return state;
  }
};

/*
const actions = {

  [Actions.SET_CREDIT_CARDS](state, { cards }) {
    return [ ...cards ];
  },

  [Actions.FETCH_CREDIT_CARDS]() {
    return false;
  }

};

export default function creditCardsReducer(state = initialState, action) {
  const reduce = actions[action.type];
  return reduce ? reduce(state, action) : state;
}
*/
