import {checkLogin, checkToken} from "./server";

import {
  CHECK_LOGIN_ACTION_ERROR,
  CHECK_LOGIN_ACTION_INIT, CHECK_LOGIN_ACTION_RESET, CHECK_LOGIN_ACTION_SUCCESS,
  CHECK_LOGIN_TOKEN_ACTION_ERROR,
  CHECK_LOGIN_TOKEN_ACTION_INIT,
  CHECK_LOGIN_TOKEN_ACTION_SUCCESS
} from "./const";


export const checkTokenAction = token => {
  return dispatch => {
    dispatch({type: CHECK_LOGIN_TOKEN_ACTION_INIT});
    checkToken(token).then(response => {
      if (response.data.err) dispatch({type: CHECK_LOGIN_TOKEN_ACTION_ERROR, payload:response.data.error})
      else dispatch({type: CHECK_LOGIN_TOKEN_ACTION_SUCCESS, payload: response.data})
    }).catch(() => {
      dispatch({type: CHECK_LOGIN_TOKEN_ACTION_ERROR, payload: {msg: 'Ha ocurrido un error desconocido'}})
    })
  }
};

export const checkLoginAction = credentials => {
  return dispatch => {
    dispatch({type: CHECK_LOGIN_ACTION_INIT});
    checkLogin(credentials).then(response => {
      if (response.data.err) dispatch({type: CHECK_LOGIN_ACTION_ERROR, payload:response.data})
      else dispatch({type: CHECK_LOGIN_ACTION_SUCCESS, payload: response.data})
    }).catch(() => {
      dispatch({type: CHECK_LOGIN_ACTION_ERROR, payload:{msg: 'Ha ocurrido un error desconocido'}})
    })
  }
};
export const resetCheckLoginAction = () => {
  return dispatch => {
    dispatch({type: CHECK_LOGIN_ACTION_RESET})
  }
}