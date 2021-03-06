import { FETCH_LIST_SUCCESS, FILTER_LIST, GET_DETAILS} from './types';
import axios from 'axios';


const listFetched = list => ({
    type: FETCH_LIST_SUCCESS,
    list
});

export const filterList = (text = '')=> ({
    type: FILTER_LIST,
    text
});

export const getDetails = (coast) => ({
    type: GET_DETAILS,
    coast
 })


export const fetchList = () => {
    return function(dispatch) {
        axios.get('https://api.coastal.ca.gov/access/v1/locations')
        .then(response => {
            dispatch(listFetched(response.data));
        })
        .catch((error) => {
            console.log(error);
        })
    }
}