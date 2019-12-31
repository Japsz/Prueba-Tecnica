import {
  GET_EPISODE_ERROR,
  GET_EPISODE_INIT, GET_EPISODE_SUCCESS,
  GET_EPISODES_ERROR,
  GET_EPISODES_INIT,
  GET_EPISODES_SUCCESS
} from "./const";

import {getEpisodesPage} from "./server";

export const getEpisodesAction = url => {
  return dispatch => {
    dispatch({type: GET_EPISODES_INIT});
    getEpisodesPage(url).then(response => {
      dispatch({type: GET_EPISODES_SUCCESS, payload: response.data})
    }).catch(() => {
      dispatch({type: GET_EPISODES_ERROR})
    })
  }
};

export const getSingleEpisodeAction = url => {
  return dispatch => {
    dispatch({type: GET_EPISODE_INIT});
    getEpisodesPage(url).then(response => {
      dispatch({type: GET_EPISODE_SUCCESS, payload: response.data})
    }).catch((e) => {
      dispatch({type: GET_EPISODE_ERROR, payload: {msg: 'ocurrió un error desconocido'}})
    })
  }
};
