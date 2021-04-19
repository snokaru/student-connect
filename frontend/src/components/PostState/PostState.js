import React, { useReducer, useEffect } from "react";
import PostContext from "./postContext";
import PostReducer from "./postReducer";
import postService from "../../services/post";
import {
  POSTS_LOADED,
  SET_FILTERS,
  CLEAR_FILTERS,
  ADD_POST,
  POST_ERROR,
} from "../../types";
const PostState = (props) => {
  const initialState = {
    currentPost: null,
    filters: [],
    posts: [],
    filteredPosts: [],
    error: null,
  };
  const [state, dispatch] = useReducer(PostReducer, initialState);
  //useEffect(() => {},[]);
  const createPost = async (formData) => {
    try {
      const post = await postService.createPost(formData);
      let updatedPosts = [...state.posts, post];
      console.log(updatedPosts);
      dispatch({ type: ADD_POST, payload: updatedPosts });
    } catch (error) {
      dispatch({ type: POST_ERROR, payload: error.error });
    }
  };
  return (
    <PostContext.Provider
      value={{
        currentPost: state.currentPost,
        filters: state.filters,
        posts: state.posts,
        filteredPosts: state.filteredPosts,
        createPost,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
