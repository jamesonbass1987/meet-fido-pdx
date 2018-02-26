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
        currentFilter: {
            ...state.currentFilter,
            [action.payload.type]: action.payload.value
        }
    })
}

const fetchDogAttributeStart = state => {
    return updateObject(state, { loading: true });
};

const fetchDogAttributeSuccess = (state, action) => {
    return updateObject(state, {
        attributes: {
            ...state.attributes,
            [action.attribute]: action.attributes
        },
        loading: false
    });
};

const fetchDogAttributeFail = state => {
    return updateObject(state, { loading: false });
};

const resetDogFilter = state => {
    return updateObject(state, {
        currentFilter: {
            age: '',
            size: '',
            breed: '' 
        }
    })
}


const addEditDogStart = state => {
    return updateObject(state, { loading: true });
};

const addEditDogSuccess = (state, action) => {
    return updateObject(state, { loading: false });
};

const addEditDogFail = state => {
    return updateObject(state, { loading: false });
};

const deleteDogStart = state => {
    return updateObject(state, { loading: true });
};

const deleteDogSuccess = (state, action) => {
    return updateObject(state, { loading: false });
};

const deleteDogFail = state => {
    return updateObject(state, { loading: false });
};


const dogReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_DOGS_START: return fetchDogsStart(state);
        case actionTypes.FETCH_DOGS_SUCCESS: return fetchDogsSuccess(state, action);
        case actionTypes.FETCH_DOGS_FAIL: return fetchDogsFail(state);
        case actionTypes.FETCH_DOG_START: return fetchDogStart(state);
        case actionTypes.FETCH_DOG_SUCCESS: return fetchDogSuccess(state, action);
        case actionTypes.FETCH_DOG_FAIL: return fetchDogFail(state);
        case actionTypes.FETCH_DOG_ATTRIBUTE_START: return fetchDogAttributeStart(state);
        case actionTypes.FETCH_DOG_ATTRIBUTE_SUCCESS: return fetchDogAttributeSuccess(state, action);
        case actionTypes.FETCH_DOG_ATTRIBUTE_FAIL: return fetchDogAttributeFail(state);
        case actionTypes.UPDATE_DOG_FILTER: return updateDogFilter(state, action);
        case actionTypes.RESET_DOG_FILTER: return resetDogFilter(state);
        case actionTypes.CREATE_EDIT_DOG_START: return addEditDogStart(state);
        case actionTypes.CREATE_EDIT_DOG_SUCCESS: return addEditDogSuccess(state, action);
        case actionTypes.CREATE_EDIT_DOG_FAIL: return addEditDogFail(state);
        case actionTypes.DELETE_DOG_START: return deleteDogStart(state);
        case actionTypes.DELETE_DOG_SUCCESS: return deleteDogSuccess(state);
        case actionTypes.DELETE_DOG_FAIL: return deleteDogFail(state);
        default: return state
    }
}

export default dogReducer;