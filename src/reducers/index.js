import { GET_ITEMS, ADD_COUNT } from '../constants'

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

export const count = function(state = 0, action) {
  console.log(action)
  switch (action.type) {
    case ADD_COUNT:
      return action.count;
      break;
    default:
      return state;
  }
};
