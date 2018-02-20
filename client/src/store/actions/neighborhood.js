import * as actionTypes from './actionTypes';
import axios from '../../shared/axios-api';

// NEIGHBORHOOD INDEX ACTIONS

export const fetchNeighborhoodsSuccess = (neighborhoods) => {
    return {
        type: actionTypes.FETCH_NEIGHBORHOODS_SUCCESS,
        neighborhoods: neighborhoods
    };
};

export const fetchNeighborhoodsFail = (error) => {
    return {
        type: actionTypes.FETCH_NEIGHBORHOODS_FAIL,
        error: error
    };
};

export const fetchNeighborhoodsStart = () => {
    return {
        type: actionTypes.FETCH_NEIGHBORHOODS_START
    };
};

export const fetchNeighborhoods = () => {
    return dispatch => {

        dispatch(fetchNeighborhoodsStart());
        axios.get('/neighborhoods')
            .then(res => {
                const fetchedNeighborhoods = [...res.data];
                dispatch(fetchNeighborhoodsSuccess(fetchedNeighborhoods));
            })
            .catch(err => {
                dispatch(fetchNeighborhoodsFail(err));
            });
    };
};