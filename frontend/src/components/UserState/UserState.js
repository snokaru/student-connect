import React, { useReducer, useEffect } from "react";
import UserContext from "./userContext";
import UserReducer from "./userReducer";
import { useHistory } from "react-router-dom";
import axios from "axios";
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
  let history = useHistory();
  const initialState = {
    token: localStorage.token,
    isAuthenticated: false,
    user: null,
    error: null,
  };
  const [state, dispatch] = useReducer(UserReducer, initialState);

  useEffect(() => {
    storageUpdater();
    if (localStorage.token) {
      loadUser();
    }
  }, [state.token]);

  const register = async (formData) => {
    console.log("inregistrare");
    try {
      const res = await axios.post("http://localhost:3003/api/users", formData);
      dispatch({ type: REGISTER_SUCCES, payload: res.data.token });
      await localStorage.setItem("token", res.data.token);
      loadUser();
    } catch (error) {
      dispatch({ type: REGISTER_FAIL, payload: error.error });
    }
  };

  const login = async (formData) => {
    try {
      const res = await axios.post("http://localhost:3003/api/login", formData);
      dispatch({ type: LOGIN_SUCCES, payload: res.data.token });
      await localStorage.setItem("token", res.data.token);
      loadUser();
      console.log("logare");
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error.error });
    }
  };
  const logout = async () => {
    delete axios.defaults.headers.common["token"];
    await localStorage.removeItem("token");
    try {
      dispatch({ type: LOGOUT });
      history.push("/");
      console.log("delogare");
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error.error });
    }
  };
  const update = async (formData) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      // Update user after logging info
      const res = await axios.put("http://localhost:3003/api/login", formData);
      dispatch({ type: USER_LOADED, payload: res.data}) 
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error.error });
    }
  };
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get("http://localhost:3003/api/login");
      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error.error });
    }
  };

  const setAuthToken = (token) => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = token;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  };
  const storageUpdater = () => {
    const hours = 1;
    let now = new Date().getTime();
    const setupTime = localStorage.getItem("setupTime");
    if (setupTime == null) {
      localStorage.setItem("setupTime", now);
    } else {
      if (now - setupTime > hours * 60 * 60 * 1000) {
        localStorage.removeItem("token");
        localStorage.setItem("setupTime", now);
      }
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
