import {initialState} from "./initialState";
import {
  ADD_COMMENT_ERROR,
  ADD_COMMENT_INIT, ADD_COMMENT_RESET, ADD_COMMENT_SUCCESS,
  DELETE_COMMENT_ERROR, DELETE_COMMENT_INIT, DELETE_COMMENT_RESET, DELETE_COMMENT_SUCCESS,
  GET_BY_ID_ERROR,
  GET_BY_ID_INIT,
  GET_BY_ID_RESET,
  GET_BY_ID_SUCCESS, MODIFY_COMMENT_ERROR,
  MODIFY_COMMENT_INIT, MODIFY_COMMENT_RESET, MODIFY_COMMENT_SUCCESS
} from "./const";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_BY_ID_INIT:
      return {
        ...state,
        getCommentByIdError: false,
        getCommentByIdSuccess: false,
        getCommentByIdLoading: true,
      }
    case GET_BY_ID_ERROR:
      return {
        ...state,
        getCommentByIdError: true,
        getCommentByIdSuccess: false,
        getCommentByIdLoading: false,
        getCommentByIdResponse: action.payload,
      }
    case GET_BY_ID_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        getCommentByIdError: false,
        getCommentByIdSuccess: true,
        getCommentByIdLoading: false,
        getCommentByIdResponse: action.payload,
      }
    case GET_BY_ID_RESET:
      return {
        ...state,
        getCommentByIdError: false,
        getCommentByIdSuccess: false,
        getCommentByIdLoading: false,
      }
    case MODIFY_COMMENT_INIT:
      return {
        ...state,
        modifyCommentError: false,
        modifyCommentSuccess: false,
        modifyCommentLoading: true,
      }
    case MODIFY_COMMENT_ERROR:
      return {
        ...state,
        modifyCommentError: true,
        modifyCommentSuccess: false,
        modifyCommentLoading: false,
        modifyCommentResponse: action.payload,
      }
    case MODIFY_COMMENT_SUCCESS:
      return {
        ...state,
        modifyCommentError: false,
        modifyCommentSuccess: true,
        modifyCommentLoading: false,
        modifyCommentResponse: action.payload,
      }
    case MODIFY_COMMENT_RESET:
      return {
        ...state,
        modifyCommentError: false,
        modifyCommentSuccess: false,
        modifyCommentLoading: false,
      }
    case DELETE_COMMENT_INIT:
      return {
        ...state,
        deleteCommentError: false,
        deleteCommentSuccess: false,
        deleteCommentLoading: true,
      }
    case DELETE_COMMENT_ERROR:
      return {
        ...state,
        deleteCommentError: true,
        deleteCommentSuccess: false,
        deleteCommentLoading: false,
        deleteCommentResponse: action.payload,
      }
    case DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        deleteCommentError: false,
        deleteCommentSuccess: true,
        deleteCommentLoading: false,
        deleteCommentResponse: action.payload,
      }
    case DELETE_COMMENT_RESET:
      return {
        ...state,
        deleteCommentError: false,
        deleteCommentSuccess: false,
        deleteCommentLoading: false,
      }
    case ADD_COMMENT_INIT:
      return {
        ...state,
        addCommentError: false,
        addCommentSuccess: false,
        addCommentLoading: true,
      }
    case ADD_COMMENT_ERROR:
      return {
        ...state,
        addCommentError: true,
        addCommentSuccess: false,
        addCommentLoading: false,
        addCommentResponse: action.payload,
      }
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        addCommentResponse: action.payload,
        addCommentError: false,
        addCommentSuccess: true,
        addCommentLoading: false,
      }
    case ADD_COMMENT_RESET:
      return {
        ...state,
        addCommentError: false,
        addCommentSuccess: false,
        addCommentLoading: false,
      }
    default:
      return {...state}
  }
}