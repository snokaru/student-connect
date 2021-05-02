import {
  POSTS_LOADED,
  SET_FILTERS,
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
      const newPosts = state.posts.filter((post) => post.id !== action.payload);
      return {
        ...state,
        posts: newPosts,
      };
    case MODIFY_POST:
      return {
        ...state,
        posts: state.posts.map((post) => {
          return post.id === action.payload.id ? action.payload : post;
        }),
      };
    default:
      return state;
  }
}
