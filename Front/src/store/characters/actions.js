import {
  GET_CHARACTERS_ERROR,
  GET_CHARACTERS_INIT,
  GET_CHARACTERS_SUCCESS, GET_CURRENT_CHARACTER_ERROR, GET_CURRENT_CHARACTER_INIT, GET_CURRENT_CHARACTER_SUCCESS
} from "./const";

import {getCharactersPage} from "./server";

export const getCharactersAction = url => {
  return dispatch => {
    dispatch({type: GET_CHARACTERS_INIT});
    getCharactersPage(url).then(response => {
      dispatch({type: GET_CHARACTERS_SUCCESS, payload: response.data})
    }).catch((e) => {
      dispatch({type: GET_CHARACTERS_ERROR, payload: {msg: 'ocurrió un error desconocido'}})
    })
  }
};

export const getSingleCharacterAction = url => {
  return dispatch => {
    dispatch({type: GET_CURRENT_CHARACTER_INIT});
    getCharactersPage(url).then(response => {
      dispatch({type: GET_CURRENT_CHARACTER_SUCCESS, payload: response.data})
    }).catch((e) => {
      dispatch({type: GET_CURRENT_CHARACTER_ERROR, payload: {msg: 'ocurrió un error desconocido'}})
    })
  }
};