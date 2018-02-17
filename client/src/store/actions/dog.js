import * as actionTypes from './actionTypes';
import axios from '../../shared/axios-api';

// DOG INDEX ACTIONS

export const fetchDogsSuccess = (dogs) => {
    return {
        type: actionTypes.FETCH_DOGS_SUCCESS,
        dogs: dogs
    };
};

export const fetchDogsFail = (error) => {
    return {
        type: actionTypes.FETCH_DOGS_FAIL,
        error: error
    };
};

export const fetchDogsStart = () => {
    return {
        type: actionTypes.FETCH_DOGS_START
    };
};

export const fetchDogs = () => {
    return dispatch => {
        dispatch(fetchDogsStart());
        axios.get('/dogs')
            .then(res => {
                const fetchedDogs = [...res.data];
                dispatch(fetchDogsSuccess(fetchedDogs));
            })
            .catch(err => {
                dispatch(fetchDogsFail(err));
            });
    };
};

// DOG SHOW ACTIONS

export const fetchDogSuccess = (dog) => {
    return {
        type: actionTypes.FETCH_DOG_SUCCESS,
        dog
    };
};

export const fetchDogFail = (error) => {
    return {
        type: actionTypes.FETCH_DOG_FAIL,
        error
    };
};

export const fetchDogStart = () => {
    return {
        type: actionTypes.FETCH_DOG_START
    };
};

export const fetchDog = id => {
    return dispatch => {
        dispatch(fetchDogsStart());
        axios.get(`/dogs/${id}`)
            .then(res => {
                const fetchedDog = res.data.dog;
                dispatch(fetchDogSuccess(fetchedDog));
            })
            .catch(err => {
                dispatch(fetchDogFail(err));
            });
    };
};


//DOG ATTRIBUTE INDEX ACTIONS

export const fetchDogAttributeSuccess = (attribute) => {
    return {
        type: actionTypes.FETCH_DOG_ATTRIBUTE_SUCCESS,
        attribute
    };
};

export const fetchDogAttributeFail = (error) => {
    return {
        type: actionTypes.FETCH_DOG_ATTRIBUTE_FAIL,
        error
    };
};

export const fetchDogAttributeStart = () => {
    return {
        type: actionTypes.FETCH_DOG_ATTRIBUTE_START
    };
};

export const fetchDogAttribute = attribute => {
    return dispatch => {
        dispatch(fetchDogAttributeStart());
        axios.get(`/${attribute}`)
            .then(res => {
                const fetchedAttribute = res.data.dog;
                dispatch(fetchDogAttributeSuccess(fetchedAttribute));
            })
            .catch(err => {
                dispatch(fetchDogAttributeFail(err));
            });
    };
};