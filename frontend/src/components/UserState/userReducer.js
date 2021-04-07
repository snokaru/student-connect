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
      return { ...state, isAuthenticated: true, token: action.payload };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return { ...state, error: action.payload };
    case USER_LOADED:
      return { ...state, user: action.payload };
    case LOGOUT:
      return { ...state, token: null, user: null, isAuthenticated: false };
    default:
      return state;
  }
}
