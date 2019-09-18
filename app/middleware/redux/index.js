import {combineReducers} from 'redux';
import SearchResult from './reducers/Search';

export default combineReducers({
    searchResult: SearchResult,
});
