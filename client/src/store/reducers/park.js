import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    parks: [],
    loading: false
}

const fetchParksStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const fetchParksSuccess = (state, action) => {
    return updateObject(state, {
        parks: action.parks,
        loading: false
    });
};

const fetchParksFail = (state, action) => {
    return updateObject(state, { loading: false });
};

const parkReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PARKS_START: return fetchParksStart(state, action);
        case actionTypes.FETCH_PARKS_SUCCESS: return fetchParksSuccess(state, action);
        case actionTypes.FETCH_PARKS_FAIL: return fetchParksFail(state, action);
        default: return state
    }
}

export default parkReducer;