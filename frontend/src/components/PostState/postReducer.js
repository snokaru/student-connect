import {
  POSTS_LOADED,
  SET_FILTERS,
  CLEAR_FILTERS,
  ADD_POST,
  POST_ERROR,
} from "../../types";
export default function (action, state) {
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: action.payload };
    case POST_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
