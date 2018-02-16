import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    parks: [],
    loading: false,
    selectedPark: null
}

const fetchParksStart = state => {
    return updateObject(state, { loading: true });
};

const fetchParksSuccess = (state, action) => {
    return updateObject(state, {
        parks: action.parks,
        loading: false
    });
};

const fetchParksFail = state => {
    return updateObject(state, { loading: false });
};

const fetchParkStart = state => {
    return updateObject(state, { loading: true });
};

const fetchParkSuccess = (state, action) => {
    return updateObject(state, {
        selectedPark: action.park,
        loading: false
    });
};

const fetchParkFail = state => {
    return updateObject(state, { loading: false });
};

const parkReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PARKS_START: return fetchParksStart(state);
        case actionTypes.FETCH_PARKS_SUCCESS: return fetchParksSuccess(state, action);
        case actionTypes.FETCH_PARKS_FAIL: return fetchParksFail(state);
        case actionTypes.FETCH_PARK_START: return fetchParkStart(state);
        case actionTypes.FETCH_PARK_SUCCESS: return fetchParkSuccess(state, action);
        case actionTypes.FETCH_PARK_FAIL: return fetchParkFail(state);
        default: return state
    }
}

export default parkReducer;