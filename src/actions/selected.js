import * as constants from '../constants';
import * as actions from './';
import { itemOptions } from '../adapters/itemOptions';

export function selectedOptions(data) {
  return {
    type: 'GET_ITEMS',
    items: data.items,
    options: itemOptions(data.items, data.options)
  };
};
