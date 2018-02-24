import * as actionTypes from '../actions/actionTypes';

import { updateObject } from '../../shared/utility';

const initialState = {
    neighborhoods: [],
    loading: false
}

const fetchNeighborhoodsStart = state => {
    return updateObject(state, { loading: true });
};

const fetchNeighborhoodsSuccess = (state, action) => {
    return updateObject(state, {
        neighborhoods: action.neighborhoods,
        loading: false,
    });
};

const fetchNeighborhoodsFail = state => {
    return updateObject(state, { loading: false });
};

const neighborhoodReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_NEIGHBORHOODS_START: return fetchNeighborhoodsStart(state);
        case actionTypes.FETCH_NEIGHBORHOODS_SUCCESS: return fetchNeighborhoodsSuccess(state, action);
        case actionTypes.FETCH_NEIGHBORHOODS_FAIL: return fetchNeighborhoodsFail(state);
        default: return state
    }
}

export default neighborhoodReducer;