import * as actionTypes from './actionTypes';
import * as actions from './index';
import axios from '../../shared/axios-api';


// DOG SHARED ACTIONS

export const fetchDogAssetStart = () => ({ type: actionTypes.FETCH_DOG_ASSET_START });
export const fetchDogAssetFail = (error) => ({ type: actionTypes.FETCH_DOG_ASSET_FAIL, error });

// DOG INDEX ACTIONS

export const fetchDogs = () => {
    return dispatch => {
        dispatch(fetchDogAssetStart());
        axios.get('/dogs')
            .then(res => {
                const fetchedDogs = [...res.data];
                dispatch(fetchDogsSuccess(fetchedDogs));
            })
            .catch(err => {
                dispatch(fetchDogAssetFail(err));
            });
    };
};

export const fetchDogsSuccess = dogs => ({
    type: actionTypes.FETCH_DOGS_SUCCESS,
    dogs
});

// DOG SHOW ACTIONS

export const fetchDog = id => {
    return dispatch => {
        dispatch(fetchDogAssetStart());
        const token = localStorage.getItem('token');

        axios.get(`/dogs/${id}`, {
            headers: { Authorization: "Bearer " + token }
        })
            .then(res => {
                const fetchedDog = res.data.dog;
                dispatch(fetchDogSuccess(fetchedDog));
            })
            .catch(err => {
                dispatch(fetchDogAssetFail(err));
            });
    };
};

export const fetchDogSuccess = dog => ({
    type: actionTypes.FETCH_DOG_SUCCESS,
    dog
});

//DOG ATTRIBUTE INDEX ACTIONS

export const fetchDogAttribute = attribute => {
    return dispatch => {
        dispatch(fetchDogAssetStart());
        axios.get(`/${attribute}`)
            .then(res => {
                const fetchedAttributeList = res.data.map(obj => (obj))
                dispatch(fetchDogAttributeSuccess(fetchedAttributeList, attribute));
            })
            .catch(err => {
                dispatch(fetchDogAssetFail(err));
            });
    };
};

export const fetchDogAttributeSuccess = (attributes, attribute) => ({
    type: actionTypes.FETCH_DOG_ATTRIBUTE_SUCCESS,
    attributes,
    attribute
});

// DOG FILTER ACTIONS

export const updateDogFilter = (type, value) => ({
    type: actionTypes.UPDATE_DOG_FILTER,
    payload: { type, value }
});

export const resetDogFilter = () => ({
    type: actionTypes.RESET_DOG_FILTER
})

// DOG CREATE/EDIT ACTIONS

export const addEditDog = (dog, action) => (
    action === 'createDog' ? createDog(dog) : editDog(dog)
);

const createDog = dog => {
    return dispatch => {
        dispatch(fetchDogAssetStart());
        axios.post('/dogs', { dog })
            .then(res => {
                dispatch(addEditDogSuccess())
                dispatch(actions.fetchUser(dog.user_id))
            })
            .catch(err => {
                dispatch(fetchDogAssetFail(err))
            });
    };
}

const editDog = dog => {
    return dispatch => {
        dispatch(fetchDogAssetStart());
        axios.patch(`/dogs/${dog.id}`, { dog })
            .then(res => {
                dispatch(addEditDogSuccess())
                dispatch(actions.fetchUser(dog.user_id))
            })
            .catch(err => {
                dispatch(fetchDogAssetFail(err))
            });
    };
}

export const addEditDogSuccess = () => ({
    type: actionTypes.CREATE_EDIT_DOG_SUCCESS
});

// DOG DELETE ACTIONS

export const deleteDog = (id) => {
    return dispatch => {
        dispatch(fetchDogAssetStart());
        axios.delete(`/dogs/${id}`)
            .then(res => {
                dispatch(deleteDogSuccess())
                dispatch(actions.fetchCurrentUser())
            })
            .catch(err => {
                dispatch(fetchDogAssetFail(err))
            });
    };
};

export const deleteDogSuccess = () => ({
    type: actionTypes.DELETE_DOG_SUCCESS,
});