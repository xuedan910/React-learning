import { combineReducers } from 'redux'
import headerReducer from '../common/header/store/reducer'
import homeReducer from '../Pages/home/store/reducer'

export default combineReducers({
  headerReducer, homeReducer
})