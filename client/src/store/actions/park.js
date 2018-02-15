import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const fetchParksSuccess = (parks) => {
    return {
        type: actionTypes.FETCH_PARKS_SUCCESS,
        parks: parks
    };
};

export const fetchParksFail = (error) => {
    return {
        type: actionTypes.FETCH_PARKS_FAIL,
        error: error
    };
};

export const fetchParksStart = () => {
    return {
        type: actionTypes.FETCH_PARKS_START
    };
};

export const fetchParks = () => {
    return dispatch => {
        dispatch(fetchParksStart());
        axios.get('/parks.json')
            .then(res => {
                const fetchedParks = [];
                for (let key in res.data) {
                    fetchedParks.push({
                        ...res.data[key],
                        id: key
                    });
                }
                dispatch(fetchParksSuccess(fetchedOrders));
            })
            .catch(err => {
                dispatch(fetchParksFail(err));
            });
    };
};