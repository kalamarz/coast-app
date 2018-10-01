import { combineReducers } from 'redux';
import { list } from './listReducer';
import { filter } from './filterReducer';

export default combineReducers({
    list,
    filter
})

