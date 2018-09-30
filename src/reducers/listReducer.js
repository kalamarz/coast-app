import { FETCH_LIST_SUCCESS } from '../actions/types';

export const list = (state = [], action) => {
    switch(action.type){
        case  FETCH_LIST_SUCCESS:
        return[
            ...action.list
        ]
     
        default:
        return state;
    }
}

