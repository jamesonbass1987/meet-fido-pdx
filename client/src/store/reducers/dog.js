import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    dogs: [],
    loading: false,
    selectedDog: null,
}
const fetchDogsStart = state => {
    return updateObject(state, { loading: true });
};

const fetchDogsSuccess = (state, action) => {
    return updateObject(state, {
        dogs: action.dogs,
        loading: false,
    });
};

const fetchDogsFail = state => {
    return updateObject(state, { loading: false });
};

const fetchDogStart = state => {
    return updateObject(state, { loading: true });
};

const fetchDogSuccess = (state, action) => {
    return updateObject(state, {
        selectedDog: action.dog,
        loading: false
    });
};

const fetchDogFail = state => {
    return updateObject(state, { loading: false });
};

const updateDogFilter = (state, action) => {
    return updateObject(state, {
        dogFilter: {
            ...state.dogFilter,
            [action.payload.type]: action.payload.value
        }
    })
}

const dogReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_DOGS_START: return fetchDogsStart(state);
        case actionTypes.FETCH_DOGS_SUCCESS: return fetchDogsSuccess(state, action);
        case actionTypes.FETCH_DOGS_FAIL: return fetchDogsFail(state);
        case actionTypes.FETCH_DOG_START: return fetchDogStart(state);
        case actionTypes.FETCH_DOG_SUCCESS: return fetchDogSuccess(state, action);
        case actionTypes.FETCH_DOG_FAIL: return fetchDogFail(state);
        default: return state
    }
}

export default dogReducer;