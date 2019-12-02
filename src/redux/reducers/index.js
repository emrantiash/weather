import { combineReducers } from 'redux';
import homeReducer from './home';
import locationReducer from './location';
import searchReducer from './search';
export default combineReducers({
    
    homeReducer,
    locationReducer,
    searchReducer
    
});