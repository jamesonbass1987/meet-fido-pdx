import * as actionTypes from './actionTypes';
import axios from '../../shared/axios-api';

// USER SHARED ACTIONS

export const fetchUserAssetStart = () => ({
    type: actionTypes.FETCH_USER_ASSET_START
});

export const fetchUserAssetFail = error => ({
    type: actionTypes.FETCH_USER_ASSET_FAIL,
    error
});

// USER INDEX ACTIONS

export const fetchUsers = () => {
    return dispatch => {
        dispatch(fetchUserAssetStart());
        axios.get('/users')
            .then(res => {
                const fetchedUsers = [...res.data];
                dispatch(fetchUsersSuccess(fetchedUsers));
            })
            .catch(err => {
                dispatch(fetchUserAssetFail(err));
            });
    };
};

export const fetchUsersSuccess = users => ({
    type: actionTypes.FETCH_USERS_SUCCESS,
    users
});

// USER SHOW ACTIONS

export const fetchUser = id => {
    return dispatch => {
        dispatch(fetchUserAssetStart());
        axios.get(`/users/${id}`)
            .then(res => {
                const fetchedUser = res.data;
                dispatch(fetchUserSuccess(fetchedUser));
            })
            .catch(err => {
                dispatch(fetchUserAssetFail(err));
            });
    };
};

export const fetchUserSuccess = user => ({
    type: actionTypes.FETCH_USER_SUCCESS,
    user
});

// USER DELETE ACTIONS

export const deleteUser = id => {
    return dispatch => {
         dispatch(fetchUserAssetStart())
         axios.delete(`/users/${id}`)
            .then(resp => {
                dispatch(deleteUserSuccess());
            })
            .catch(err => {
                dispatch(fetchUserAssetFail(err));
            })
    }
}

export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS
});


// USER FILTER FUNCTIONS

export const updateUserFilter = (type, value) => ({
    type: actionTypes.UPDATE_USER_FILTER,
    payload: { type, value }
});

export const resetUserFilter = (type, value) => ({
    type: actionTypes.RESET_USER_FILTER
});

export const removeSelectedUser = () => ({
    type: actionTypes.REMOVE_SELECTED_USER
});

