import { GET_DETAILS } from '../actions/types';

export const details = (state = null, action) => {
    switch(action.type) {
        case GET_DETAILS:
            return action.coast;
        default:
            return state;
    }
}