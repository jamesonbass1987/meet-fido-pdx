import * as actionTypes from './actionTypes';
import axios from '../../shared/axios-api';

// NEIGHBORHOOD SHARED ACTIONS

export const fetchNeighborhoodAssetStart = () => ({
    type: actionTypes.FETCH_NEIGHBORHOOD_ASSET_START
})

export const fetchNeighborhoodAssetFail = error => ({
    type: actionTypes.FETCH_NEIGHBORHOOD_ASSET_FAIL,
    error
})

// NEIGHBORHOOD INDEX ACTIONS

export const fetchNeighborhoodsSuccess = neighborhoods => ({
    type: actionTypes.FETCH_NEIGHBORHOODS_SUCCESS,
    neighborhoods
});

export const fetchNeighborhoods = () => {
    return dispatch => {
        dispatch(fetchNeighborhoodAssetStart());
        axios.get('/neighborhoods')
            .then(res => {
                const fetchedNeighborhoods = [...res.data];
                dispatch(fetchNeighborhoodsSuccess(fetchedNeighborhoods));
            })
            .catch(err => {
                dispatch(fetchNeighborhoodAssetFail(err));
            });
    };
};