import * as actionTypes from './actionTypes';
import axios from '../../shared/axios-api';

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
        axios.get('/parks')
            .then(res => {
                const fetchedParks = [...res.data.parks];
                dispatch(fetchParksSuccess(fetchedParks));
            })
            .catch(err => {
                dispatch(fetchParksFail(err));
            });
    };
};