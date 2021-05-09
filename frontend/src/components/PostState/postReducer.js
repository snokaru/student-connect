import {
  POSTS_LOADED,
  SET_SEARCH,
  ADD_FILTER,
  REMOVE_FILTER,
  CLEAR_FILTERS,
  ADD_POST,
  POST_ERROR,
  DELETE_POST,
  MODIFY_POST,
} from "../../types";
export default function (state, action) {
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case POSTS_LOADED:
      return { ...state, posts: action.payload };
    case POST_ERROR:
      return { ...state, error: action.payload };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case MODIFY_POST:
      return {
        ...state,
        posts: [
          ...state.posts.map((post) => {
            return post.id === action.payload.id ? action.payload : post;
          }),
        ],
      };
    case SET_SEARCH: 
      return {
        ...state,
        search: action.payload,
      }
    default:
      return state;
  }
}
