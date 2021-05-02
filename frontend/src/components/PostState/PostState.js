import React, { useReducer, useEffect } from "react";
import PostContext from "./postContext";
import PostReducer from "./postReducer";
import postService from "../../services/post";
import {
  POSTS_LOADED,
  SET_FILTERS,
  CLEAR_FILTERS,
  DELETE_POST,
  ADD_POST,
  POST_ERROR,
  MODIFY_POST,
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
      try {
        const receivedPosts = await postService.makeQuery().exec();
        dispatch({ type: POSTS_LOADED, payload: receivedPosts });
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
    } catch (error) {
      dispatch({ type: POST_ERROR, payload: error.error });
    }
  };
  const deletePost = async (id) => {
    try {
      await postService.deletePost(id);
      dispatch({ type: DELETE_POST, payload: id });
    } catch (error) {
      dispatch({ type: POST_ERROR, payload: error.error });
    }
  };
  const manageComment = async (id, formData, action) => {
    try {
      const post = await postService.manageComment(id, formData, action);
      dispatch({ type: MODIFY_POST, payload: post });
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
        deletePost,
        manageComment
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
