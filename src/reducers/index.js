import { combineReducers } from 'redux';
import { list } from './listReducer';
import { filter } from './filterReducer';
import { details } from './detailsReducer';

export default combineReducers({
    list,
    filter,
    details
})

