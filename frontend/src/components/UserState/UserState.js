import React, { useReducer } from "react";
import UserContext from "./userContext";
import UserReducer from "./userReducer";
import {
  REGISTER_SUCCES,
  REGISTER_FAIL,
  LOGIN_SUCCES,
  LOGIN_FAIL,
  CLEAR_ERRORS,
  USER_LOADED,
  LOGOUT,
} from "../../types";
const UserState = (props) => {
  const initialState = {
    token: localStorage.getItem("Authorization"),
    isAuthenticated: null,
    user: null,
    error: null,
  };
  const [state, dispatch] = useReducer(UserReducer, initialState);
  return (
    <UserContext.Provider value={{}}>{props.children};</UserContext.Provider>
  );
};

export default UserState;
