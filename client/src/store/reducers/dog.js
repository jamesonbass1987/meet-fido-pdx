import * as actionTypes from '../actions/actionTypes';

import { updateObject } from '../../shared/utility';

const initialState = {
    dogs: [],
    loading: false,
    selectedDog: null,
    attributes: {
        ages: [],
        breeds: [],
        sizes: []
    },
    currentFilter: {
        age: '',
        size: '',
        breed: '' 
    }
}

const fetchDogAssetStart = state => (updateObject(state, { loading: true }));
const fetchDogAssetFail = (state, action) => (updateObject(state, { loading: false, error: action.error }));

const fetchDogSuccess = (state, action) => (
    updateObject(state, {
        selectedDog: action.dog,
        loading: false
    })
);

const fetchDogsSuccess = (state, action) => (
    updateObject(state, {
        dogs: action.dogs,
        loading: false,
    })
);

const fetchDogAttributeSuccess = (state, action) => (
    updateObject(state, {
        attributes: {
            ...state.attributes,
            [action.attribute]: action.attributes
        },
        loading: false
    })
);

const addEditDogSuccess = (state, action) => (
    updateObject(state, { loading: false })
);

const deleteDogSuccess = (state, action) => (
    updateObject(state, { loading: false })
);

const updateDogFilter = (state, action) => (
    updateObject(state, {
        currentFilter: {
            ...state.currentFilter,
            [action.payload.type]: action.payload.value
        }
    })
);

const resetDogFilter = state => (
    updateObject(state, {
        currentFilter: {
            age: '',
            size: '',
            breed: '' 
        }
    })
);

const dogReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_DOG_ASSET_START: return fetchDogAssetStart(state);
        case actionTypes.FETCH_DOG_ASSET_FAIL: return fetchDogAssetFail(state, action);
        case actionTypes.FETCH_DOGS_SUCCESS: return fetchDogsSuccess(state, action);
        case actionTypes.FETCH_DOG_SUCCESS: return fetchDogSuccess(state, action);
        case actionTypes.FETCH_DOG_ATTRIBUTE_SUCCESS: return fetchDogAttributeSuccess(state, action);
        case actionTypes.CREATE_EDIT_DOG_SUCCESS: return addEditDogSuccess(state, action);
        case actionTypes.DELETE_DOG_SUCCESS: return deleteDogSuccess(state);
        case actionTypes.UPDATE_DOG_FILTER: return updateDogFilter(state, action);
        case actionTypes.RESET_DOG_FILTER: return resetDogFilter(state);
        default: return state
    }
}

export default dogReducer;