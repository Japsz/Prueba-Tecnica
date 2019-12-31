import {combineReducers} from "redux";
import user from './user/reducer'
import characters from './characters/reducer'
import episodes from './episodes/reducer'
import comments from './comments/reducer'

export default combineReducers({
  user,
  characters,
  episodes,
  comments
})