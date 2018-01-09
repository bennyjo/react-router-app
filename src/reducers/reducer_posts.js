import _ from 'lodash';
// Object descructing
import { FETCH_POSTS, FETCH_POST } from '../actions/index';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_POST:
      // Nested object destructing
      const { payload: { data } } = action;
      const post = data;
  
      // Spread syntax using the spread operator
      // Computed property names
      return { ...state, [post.id]: post };
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }

  return state;
}