import _ from 'lodash';
// Object descructing
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions/index';

export default function(posts = {}, action) {
  switch(action.type) {
    case DELETE_POST:
      const { [action.payload]: id, ...otherPosts } = posts;

      return otherPosts;
    case FETCH_POST:
      // Nested object destructing
      const { payload: { data } } = action;
      const post = data;
  
      // Spread syntax using the spread operator
      // Computed property names
      return { ...posts, [post.id]: post };
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return posts;
  }

  return posts;
}