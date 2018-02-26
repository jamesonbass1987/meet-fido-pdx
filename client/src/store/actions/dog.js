import * as actionTypes from './actionTypes';
import * as actions from './index';
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
        const token = localStorage.getItem('token');

        axios.get(`/dogs/${id}`, {
            headers: { Authorization: "Bearer " + token }
        })
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

export const fetchDogAttributeSuccess = (attributes, attribute) => {
    return {
        type: actionTypes.FETCH_DOG_ATTRIBUTE_SUCCESS,
        attributes,
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
                const fetchedAttributeList = res.data.map(obj => (obj))
                dispatch(fetchDogAttributeSuccess(fetchedAttributeList, attribute));
            })
            .catch(err => {
                dispatch(fetchDogAttributeFail(err));
            });
    };
};

// Dog filter functions

export const updateDogFilter = (type, value) => {
    return {
        type: actionTypes.UPDATE_DOG_FILTER,
        payload: { type, value }
    };
}

export const resetDogFilter = () => {
    return {
        type: actionTypes.RESET_DOG_FILTER
    }
}

// Create/Edit Dog Functions

export const addEditDogSuccess = () => {
    return {
        type: actionTypes.CREATE_EDIT_DOG_SUCCESS,
    };
};

export const addEditDogFail = (error) => {
    return {
        type: actionTypes.CREATE_EDIT_DOG_FAIL,
        error
    };
};

export const addEditDogStart = () => {
    return {
        type: actionTypes.CREATE_EDIT_DOG_START
    };
};

export const addEditDog = (dog, action) => {

    if (action === 'createDog'){
        return dispatch => {
            dispatch(addEditDogStart());
            axios.post('/dogs', { dog })
                .then(res => {
                    dispatch(addEditDogSuccess())
                    dispatch(actions.fetchUser(dog.user_id))
                })
                .catch(err => {
                    dispatch(addEditDogFail(err))
                });
        };
    } else {
        return dispatch => {
            dispatch(addEditDogStart());
            axios.patch(`/dogs/${dog.id}`, { dog })
                .then(res => {
                    dispatch(addEditDogSuccess())
                    dispatch(actions.fetchUser(dog.user_id))
                })
                .catch(err => {
                    dispatch(addEditDogFail(err))
                });
        };
    }


};