import {initialState} from "./initialState";
import {
  GET_CURRENT_CHARACTER_ERROR, SET_CURRENT_CHARACTER_ERROR,
  GET_CURRENT_CHARACTER_INIT, SET_CURRENT_CHARACTER_INIT,
  GET_CURRENT_CHARACTER_SUCCESS, SET_CURRENT_CHARACTER_SUCCESS,
  GET_CHARACTERS_ERROR,
  GET_CHARACTERS_INIT,
  GET_CHARACTERS_SUCCESS
} from "./const";

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS_INIT: {
      return {
        ...state,
        charactersLoading: true
      }
    }
    case GET_CHARACTERS_SUCCESS: {
      return {
        ...state,
        characters: action.payload,
        charactersLoading: false,
        charactersError: false,
      }
    }
    case GET_CHARACTERS_ERROR: {
      return {
        ...state,
        characters: state.characters,
        charactersLoading: false,
        charactersError: true,
      }
    }
    case SET_CURRENT_CHARACTER_INIT: {
      return {
        ...state,
        setCharacterLoading: true
      }
    }
    case SET_CURRENT_CHARACTER_SUCCESS: {
      return {
        ...state,
        characters: action.payload,
        setCharacterLoading: false,
        setCharacterError: false,
      }
    }
    case SET_CURRENT_CHARACTER_ERROR: {
      return {
        ...state,
        characters: state.characters,
        setCharacterLoading: false,
        setCharacterError: true,
      }
    }
    case GET_CURRENT_CHARACTER_INIT: {
      return {
        ...state,
        getCharacterLoading: true
      }
    }
    case GET_CURRENT_CHARACTER_SUCCESS: {
      return {
        ...state,
        character: action.payload,
        getCharacterLoading: false,
        getCharacterError: false,
      }
    }
    case GET_CURRENT_CHARACTER_ERROR: {
      return {
        ...state,
        getCharacterLoading: false,
        getCharacterError: true,
      }
    }
    default: {
      return state
    }
  }
}