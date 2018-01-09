import _ from 'lodash';
// Object descructing
import { FETCH_POSTS, FETCH_POST } from '../actions/index';

export default function(state = {}, action) {
  // Nested object destructing
  const { payload: { data } } = action;

  switch(action.type) {
    case FETCH_POSTS:
      const post = data;
      // Spread syntax using the spread operator
      // Computed property names
      return { ...state, [data.id]: data };
    case FETCH_POSTS:
      return _.mapKeys(data, 'id');
    default:
      return state;
  }

  return state;
}