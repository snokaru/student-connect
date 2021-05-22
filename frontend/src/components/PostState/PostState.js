import React, { useReducer, useEffect } from "react";
import PostContext from "./postContext";
import PostReducer from "./postReducer";
import postService from "../../services/post";
import {
  POSTS_LOADED,
  SET_FILTERS,
  REMOVE_FILTER,
  CLEAR_FILTERS,
  SET_SEARCH,
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
    search: null,
    error: null,
  };
  const [state, dispatch] = useReducer(PostReducer, initialState);
  const fetchData = async () => {
    console.log("IN FETCH DATA");
    try {
      const query = postService.makeQuery();
      if (state.search) {
        query.search(state.search);
      }
      for (let filter of state.filters) {
        query.filter(filter.field, filter.value);
      }
      console.log(query.baseUrl);
      const posts = await query.exec();
      console.log(posts);
      dispatch({ type: POSTS_LOADED, payload: posts });
    } catch (error) {
      console.log("IT ERRORED>>>" + error);
      dispatch({ type: POST_ERROR, payload: error.response.data.msg });
    }
  };
  useEffect(() => {
    console.log("REFETCHING");
    fetchData();
  }, [state.search, state.filters]);
  const createPost = async (formData) => {
    try {
      const post = await postService.createPost(formData);
      dispatch({ type: ADD_POST, payload: post });
    } catch (error) {
      dispatch({ type: POST_ERROR, payload: error.response.data.msg });
    }
  };
  const deletePost = async (id) => {
    try {
      await postService.deletePost(id);
      dispatch({ type: DELETE_POST, payload: id });
    } catch (error) {
      dispatch({ type: POST_ERROR, payload: error.response.data.msg });
    }
  };
  const manageComment = async (id, formData, action) => {
    try {
      const post = await postService.manageComment(id, formData, action);
      dispatch({ type: MODIFY_POST, payload: post });
    } catch (error) {
      dispatch({ type: POST_ERROR, payload: error.response.data.msg });
    }
  };

  const setSearch = async (searchText) => {
    console.log("SETTING SEARCH FIELD! SHOULD TRIGGER RERENDER");
    dispatch({ type: SET_SEARCH, payload: searchText });
  };
  const setFilters = (filters) => {
    dispatch({ type: SET_FILTERS, payload: filters });
  };

  const removeFilter = (filterNumber) => {
    dispatch({ type: REMOVE_FILTER, payload: filterNumber });
  };

  return (
    <PostContext.Provider
      value={{
        ...state,
        createPost,
        deletePost,
        manageComment,
        setSearch,
        setFilters,
        removeFilter,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
