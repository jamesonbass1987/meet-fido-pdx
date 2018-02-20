import * as actionTypes from '../actions/actionTypes';

const initialState = {
    neighborhoods: [],
    loading: false
}


export const neighborhoodReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_NEIGHBORHOODS_START: return fetchNeighborhoodsStart(state);
        case actionTypes.FETCH_NEIGHBORHOODS_SUCCESS: return fetchNeighborhoodsSuccess(state, action);
        case actionTypes.FETCH_NEIGHBORHOODS_FAIL: return fetchNeighborhoodsFail(state);
        default: return state
    }
}