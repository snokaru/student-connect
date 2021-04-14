import React, { useReducer, useEffect } from "react";
import PostContext from "./postContext";
import PostReducer from "./postReducer";
import { POSTS_LOADED, SET_FILTERS, CLEAR_FILTERS,ADD_POST } from "../../types";
const PostState = (props) => {
  const initialState = {
    filters: [],
    posts: [],
    filteredPosts: [],
  };
  const [state, dispatch] = useReducer(PostReducer, initialState);
  //useEffect(() => {},[]);
  return (
    <PostContext.Provider
      value={{
        filters: state.filters,
        posts: state.posts,
        filteredPosts: state.filteredPosts,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
