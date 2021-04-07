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
    if (localStorage.token) {
      LoadUser();
    }
  }, [state.token]);
  const Register = async (formData) => {
    try {
      const res = await axios.post("http://localhost:3003/api/users", formData);
      dispatch({ type: REGISTER_SUCCES, payload: res.data.token });
      await localStorage.setItem("token", res.data.token);
      LoadUser();
      console.log("inregistrare");
    } catch (error) {
      dispatch({ type: REGISTER_FAIL, payload: error.error });
    }
  };

  const Login = async (formData) => {
    try {
      const res = await axios.post("http://localhost:3003/api/login", formData);
      dispatch({ type: LOGIN_SUCCES, payload: res.data.token });
      await localStorage.setItem("token", res.data.token);
      LoadUser();
      console.log("logare");
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error.error });
    }
  };
  const Logout = async () => {
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
  const LoadUser = async () => {
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
  return (
    <UserContext.Provider
      value={{
        user: state.user,
        error: state.error,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        Register,
        Login,
        Logout,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
