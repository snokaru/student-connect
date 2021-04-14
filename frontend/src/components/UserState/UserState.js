import React, { useReducer, useEffect } from "react";
import UserContext from "./userContext";
import UserReducer from "./userReducer";
import { useHistory } from "react-router-dom";
import authService from "../../services/auth";

import {
  REGISTER_SUCCES,
  REGISTER_FAIL,
  LOGIN_SUCCES,
  LOGIN_FAIL,
  CLEAR_ERRORS,
  USER_LOADED,
  LOGOUT,
  USER_UPDATED,
} from "../../types";

const UserState = (props) => {
  let history = useHistory();

  const initialState = {
    token: localStorage.token,
    isAuthenticated: false,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  useEffect(() => {
    if (localStorage.token) {
      console.log("Reloading user!");
      authService.updateToken(localStorage.token);
      load();
    }
  }, []);

  const register = async (formData) => {
    try {
      const token = await authService.register(formData);
      dispatch({ type: REGISTER_SUCCES, payload: token });
      load();
    } catch (error) {
      dispatch({ type: REGISTER_FAIL, payload: error.error });
    }
  };

  const login = async (formData) => {
    try {
      const token = await authService.login(formData);
      dispatch({ type: LOGIN_SUCCES, payload: token });
      load();
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error.error });
    }
  };

  const logout = async () => {
      await authService.logout();
      dispatch({ type: LOGOUT });
      history.push("/");
  };

  const update = async (formData) => {
    try {
      const updatedUser = await authService.update(formData);
      dispatch({ type: USER_LOADED, payload: updatedUser });
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error.error });
    }
  };
  const load = async () => {
    try {
      const loadedUser = await authService.load();
      dispatch({ type: USER_LOADED, payload: loadedUser });
    } catch (error) {
      console.log(error);
      logout();
      dispatch({ type: LOGIN_FAIL, payload: error.error });
    }
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        error: state.error,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        register,
        login,
        logout,
        update
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
