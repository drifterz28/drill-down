import * as constants from '../constants';
import * as actions from './';
import { itemOptions } from '../adapters/itemOptions';

export const selectedOptions = (data) => {
  console.log(data)
  return {
    type: constants.SELECTED,
    ...data
  };
};
