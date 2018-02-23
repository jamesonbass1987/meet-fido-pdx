import * as actionTypes from './actionTypes';
import axios from '../../shared/axios-api';

// PARK INDEX ACTIONS

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
                const fetchedParks = [...res.data];
                dispatch(fetchParksSuccess(fetchedParks));
            })
            .catch(err => {
                dispatch(fetchParksFail(err));
            });
    };
};

// PARK SHOW ACTIONS

export const fetchParkSuccess = (park) => {
    return {
        type: actionTypes.FETCH_PARK_SUCCESS,
        park
    };
};

export const fetchParkFail = (error) => {
    return {
        type: actionTypes.FETCH_PARK_FAIL,
        error
    };
};

export const fetchParkStart = () => {
    return {
        type: actionTypes.FETCH_PARK_START
    };
};

export const fetchPark = id => {
    return dispatch => {
        dispatch(fetchParksStart());
        axios.get(`/parks/${id}`)
            .then(res => {
                const fetchedPark = res.data;
                dispatch(fetchParkSuccess(fetchedPark));
            })
            .catch(err => {
                dispatch(fetchParkFail(err));
            });
    };
};

// Park filter functions

export const updateParkFilter = (type, value) => {
    return {
        type: actionTypes.UPDATE_PARK_FILTER,
        payload: { type, value }
    };
}

export const resetParkFilter = () => {
    return {
        type: actionTypes.RESET_PARK_FILTER
    }
}