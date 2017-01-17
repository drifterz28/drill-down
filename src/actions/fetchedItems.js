import * as constants from '../constants'
import * as actions from './'

export function fetchedItems(data) {
  return {
    type: 'GET_ITEMS',
    items: data.items,
    options: data.options
  };
};
