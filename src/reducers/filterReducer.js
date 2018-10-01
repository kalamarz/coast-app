import { FILTER_LIST } from '../actions/types';


export const filter = (state = '', action) => {
    switch (action.type) {
    case FILTER_LIST:
        return action.text;
    default:
        return state;
    }
}