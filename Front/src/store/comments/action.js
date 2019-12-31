import {addComment, deleteComment, getCommentById} from "./server";

import {
  ADD_COMMENT_ERROR,
  ADD_COMMENT_INIT, ADD_COMMENT_SUCCESS,
  GET_BY_ID_ERROR,
  GET_BY_ID_INIT,
  GET_BY_ID_RESET,
  GET_BY_ID_SUCCESS
} from "./const";


export const getComments = (id, type) => {
  return dispatch => {
    dispatch({type: GET_BY_ID_INIT});
    getCommentById(id, type).then(response => {
      if (response.data.err) dispatch({type: GET_BY_ID_ERROR, payload:response.data.error})
      else dispatch({type: GET_BY_ID_SUCCESS, payload: response.data})
    }).catch(() => {
      dispatch({type: GET_BY_ID_ERROR, payload:{ msg: 'Ocurrió un error desconocido'}})
    })
  }
};
export const resetGetByEpisode = () => {
  return dispatch => {
    dispatch({type: GET_BY_ID_RESET})
  }
}
export const addCommentAction = (obj, type) => {
  return dispatch => {
    dispatch({type: ADD_COMMENT_INIT});
    addComment(obj, type).then(response => {
      if (response.data.err) dispatch({type: ADD_COMMENT_ERROR, payload:response.data.error})
      else {
        dispatch({type: ADD_COMMENT_SUCCESS, payload: response.data})
        dispatch(getComments(obj[`${type}Id`], type))
      }
    }).catch(() => {
      dispatch({type: ADD_COMMENT_ERROR, payload:{ msg: 'Ocurrió un error desconocido'}})
    })
  }
};
export const deleteCommentAction = (id, type) => {
  return dispatch => {
    dispatch({type: GET_BY_ID_INIT});
    deleteComment(id, type).then(response => {
      if (response.data.err) dispatch({type: GET_BY_ID_ERROR, payload:response.data.error})
      else dispatch({type: GET_BY_ID_SUCCESS, payload: response.data})
    }).catch(() => {
      dispatch({type: GET_BY_ID_ERROR, payload:{ msg: 'Ocurrió un error desconocido'}})
    })
  }
};