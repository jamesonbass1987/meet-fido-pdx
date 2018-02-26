import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    parks: [],
    loading: false,
    selectedPark: null,
    parkFilter: {
        searchQuery: '',
        fencedPark: true,
        unfencedPark: true
    }
}

const parkActionStart = state => updateObject(state, { loading: true })

const parkActionFail = (state, action) => updateObject(state, { loading: true, error: action.error })

const fetchParksStart = state => {
    return updateObject(state, { loading: true });
};

const fetchParksSuccess = (state, action) => (
    updateObject(state, {
        parks: action.parks,
        loading: false,
    })
);

const fetchParksFail = state => (
    updateObject(state, { loading: false })
);

const fetchParkStart = state => (
    updateObject(state, { loading: true })
);

const fetchParkSuccess = (state, action) => (
    updateObject(state, {
        selectedPark: action.park,
        loading: false
    })
);

const fetchParkFail = state => (
    updateObject(state, { loading: false })
);

const updateParkFilter = (state, action) => (
    updateObject(state, {
        parkFilter: {
            ...state.parkFilter,
            [action.payload.type]: action.payload.value
        }
    })
);

const resetParkFilter = state => (
    updateObject(state, {
        parkFilter: {
            ...state.parkFilter,
            searchQuery: ''
        }
    })
);

const parkReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PARK_ACTION_START: return parkActionStart(state);
        case actionTypes.PARK_ACTION_FAIL: return parkActionFail(state, action);
        case actionTypes.FETCH_PARKS_SUCCESS: return fetchParksSuccess(state, action);
        case actionTypes.FETCH_PARK_SUCCESS: return fetchParkSuccess(state, action);
        case actionTypes.UPDATE_PARK_FILTER: return updateParkFilter(state, action);
        case actionTypes.RESET_PARK_FILTER: return resetParkFilter(state);
        default: return state
    }
}

export default parkReducer;