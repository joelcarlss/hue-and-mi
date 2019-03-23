import { combineReducers } from 'redux'
import toggelReducer from './ToggelReducers'

export default combineReducers({
    toggel: toggelReducer
}
)
