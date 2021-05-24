import {
  REGISTER_SUCCES,
  REGISTER_FAIL,
  LOGIN_SUCCES,
  LOGIN_FAIL,
  CLEAR_ERRORS,
  USER_LOADED,
  LOGOUT,
} from "../../types";

export default function (state, action) {
  switch (action.type) {
    case REGISTER_SUCCES:
    case LOGIN_SUCCES:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
        error: null,
      };

    case REGISTER_FAIL:
      return { ...state, isAuthenticated: false, token: null, error: action.payload };

    case LOGIN_FAIL:
      return { ...state, error: action.payload };

    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        error: null,
      };

    case LOGOUT:
      return { ...state, token: null, user: null, isAuthenticated: false };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      }

    default:
      return state;
  }
}
