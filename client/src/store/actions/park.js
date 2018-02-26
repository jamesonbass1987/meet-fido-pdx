import * as actionTypes from './actionTypes';
import axios from '../../shared/axios-api';

// PARK SHARED ACTIONS

export const fetchParkAssetFail = error => ({
    type: actionTypes.FETCH_PARK_ASSET_FAIL,
    error
})

export const fetchParkAssetStart = () => ({
    type: actionTypes.FETCH_PARK_ASSET_START
})

// PARK INDEX ACTIONS

export const fetchParksSuccess = parks => ({
    type: actionTypes.FETCH_PARKS_SUCCESS,
    parks
})

export const fetchParks = () => {
    return dispatch => {
        dispatch(fetchParkAssetStart());
        axios.get('/parks')
            .then(res => {
                const fetchedParks = [...res.data];
                dispatch(fetchParksSuccess(fetchedParks));
            })
            .catch(err => {
                dispatch(fetchParkAssetFail(err));
            });
    };
};

// PARK SHOW ACTIONS

export const fetchParkSuccess = park => ({
    type: actionTypes.FETCH_PARK_SUCCESS,
    park
});

export const fetchPark = id => {
    return dispatch => {
        dispatch(fetchParkAssetStart());
        axios.get(`/parks/${id}`)
            .then(res => {
                const fetchedPark = res.data;
                dispatch(fetchParkSuccess(fetchedPark));
            })
            .catch(err => {
                dispatch(fetchParkAssetFail(err));
            });
    };
};

// PARK FILTER ACTIONS

export const updateParkFilter = (type, value) => ({
    type: actionTypes.UPDATE_PARK_FILTER,
    payload: { type, value }
});

export const resetParkFilter = () => ({
    type: actionTypes.RESET_PARK_FILTER
});