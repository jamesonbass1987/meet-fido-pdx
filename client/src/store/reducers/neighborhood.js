import * as actionTypes from '../actions/actionTypes';

import { updateObject } from '../../shared/utility';

const initialState = {
    neighborhoods: [],
    loading: false
}

const fetchNeighborhoodAssetStart = state => (updateObject(state, { loading: true }));

const fetchNeighborhoodAssetFail = (state, action) => (updateObject(state, { loading: false, error: action.error}));

const fetchNeighborhoodsSuccess = (state, action) => (
    updateObject(state, {
        neighborhoods: action.neighborhoods,
        loading: false,
    })
);

const neighborhoodReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_NEIGHBORHOOD_ASSET_START: return fetchNeighborhoodAssetStart(state);
        case actionTypes.FETCH_NEIGHBORHOOD_ASSET_FAIL: return fetchNeighborhoodAssetFail(state, action);
        case actionTypes.FETCH_NEIGHBORHOODS_SUCCESS: return fetchNeighborhoodsSuccess(state, action);
        default: return state
    }
}

export default neighborhoodReducer;