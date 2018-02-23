import { combineReducers } from 'redux';
import ListReducer from './ListReducer';

export default combineReducers({
    listData: ListReducer
});
