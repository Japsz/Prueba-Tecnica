export const initialState = {
  characters: {
    results:[],
    info: {
      prev: '',
      next: ''
    }
  },
  charactersLoading: null,
  charactersError: null,

  character: {
    image:'',
    name: '',
    status: '',
    gender: '',
    species: '',
    id: 0
  },
  setCharacterLoading: null,
  setCharacterError: null,

  getCharacterLoading: null,
  getCharacterError: null,

};