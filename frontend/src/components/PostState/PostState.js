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
  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching data...");
      try {
        console.log("waiting for posts...");
        const receivedPosts = await postService.makeQuery().exec();
        dispatch({ type: POSTS_LOADED, payload: receivedPosts });
        console.log("received posts");
      } catch (error) {
        dispatch({ type: POST_ERROR, payload: error.error });
      }
    };
    fetchData();
  }, []);
  const createPost = async (formData) => {
    try {
      const post = await postService.createPost(formData);
      dispatch({ type: ADD_POST, payload: post });
      console.log(post);
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
