import {
  POSTS_LOADED,
  SET_FILTERS,
  CLEAR_FILTERS,
  ADD_POST,
  POST_ERROR,
} from "../../types";
export default function (state, action) {
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case POSTS_LOADED:
      return { ...state, posts: action.payload };
    case POST_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
