import {initialState} from "./initialState";
import {
  CHECK_LOGIN_ACTION_ERROR,
  CHECK_LOGIN_ACTION_INIT, CHECK_LOGIN_ACTION_RESET, CHECK_LOGIN_ACTION_SUCCESS,
  CHECK_LOGIN_TOKEN_ACTION_ERROR,
  CHECK_LOGIN_TOKEN_ACTION_INIT, CHECK_LOGIN_TOKEN_ACTION_RESET,
  CHECK_LOGIN_TOKEN_ACTION_SUCCESS
} from "./const";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_LOGIN_TOKEN_ACTION_INIT:
      return {
        ...state,
        checkLoginTokenError: false,
        checkLoginTokenSuccess: false,
        checkLoginTokenLoading: true,
      }
    case CHECK_LOGIN_TOKEN_ACTION_ERROR:
      localStorage.removeItem('session-token')
      return {
        ...state,
        isLogged: false,
        checkLoginError: true,
        checkLoginSuccess: false,
        checkLoginLoading: false,
        checkLoginResponse: action.payload,
      }
    case CHECK_LOGIN_TOKEN_ACTION_SUCCESS:
      return {
        ...state,
        isLogged: true,
        info: action.payload,
        checkLoginError: false,
        checkLoginSuccess: true,
        checkLoginLoading: false,
      }
    case CHECK_LOGIN_TOKEN_ACTION_RESET:
      return {
        ...state,
        checkLoginError: false,
        checkLoginSuccess: false,
        checkLoginLoading: false,
      }
    case CHECK_LOGIN_ACTION_INIT:
      return {
        ...state,
        checkLoginError: false,
        checkLoginSuccess: false,
        checkLoginLoading: true,
      }
    case CHECK_LOGIN_ACTION_ERROR:
      return {
        ...state,
        isLogged: false,
        checkLoginError: true,
        checkLoginSuccess: false,
        checkLoginLoading: false,
        checkLoginResponse: action.payload,
      }
    case CHECK_LOGIN_ACTION_SUCCESS:
      localStorage.setItem('session-token', action.payload.token)
      return {
        ...state,
        isLogged: true,
        checkLoginError: false,
        checkLoginSuccess: true,
        checkLoginLoading: false,
      }
    case CHECK_LOGIN_ACTION_RESET:
      return {
        ...state,
        checkLoginError: false,
        checkLoginSuccess: false,
        checkLoginLoading: false,
      }
    default:
      return {...state}
  }
}