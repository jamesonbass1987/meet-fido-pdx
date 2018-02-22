import * as actionTypes from './actionTypes';
import axios from '../../shared/axios-api';


// USER INDEX ACTIONS

export const fetchUsersSuccess = (users) => {
    return {
        type: actionTypes.FETCH_USERS_SUCCESS,
        users: users
    };
};

export const fetchUsersFail = (error) => {
    return {
        type: actionTypes.FETCH_USERS_FAIL,
        error: error
    };
};

export const fetchUsersStart = () => {
    return {
        type: actionTypes.FETCH_USERS_START
    };
};

export const fetchUsers = () => {
    return dispatch => {

        dispatch(fetchUsersStart());
        axios.get('/users')
            .then(res => {
                const fetchedUsers = [...res.data];
                dispatch(fetchUsersSuccess(fetchedUsers));
            })
            .catch(err => {
                dispatch(fetchUsersFail(err));
            });
    };
};

// USER SHOW ACTIONS

export const fetchUserSuccess = (user) => {
    return {
        type: actionTypes.FETCH_USER_SUCCESS,
        user
    };
};

export const fetchUserFail = (error) => {
    return {
        type: actionTypes.FETCH_USER_FAIL,
        error
    };
};

export const fetchUserStart = () => {
    return {
        type: actionTypes.FETCH_USER_START
    };
};

export const fetchUser = id => {
    return dispatch => {
        dispatch(fetchUsersStart());
        axios.get(`/users/${id}`)
            .then(res => {
                const fetchedUser = res.data;
                dispatch(fetchUserSuccess(fetchedUser));
            })
            .catch(err => {
                dispatch(fetchUserFail(err));
            });
    };
};


// USER DELETE ACTIONS

export const deleteUserSuccess = () => {
    return {
        type: actionTypes.DELETE_USER_SUCCESS
    };
};

export const deleteUserFail = (error) => {
    return {
        type: actionTypes.DELETE_USER_FAIL,
        error: error
    };
};

export const deleteUserStart = () => {
    return {
        type: actionTypes.DELETE_USER_START
    };
};

export const deleteUser = (id) => {
    return dispatch => {
         dispatch(deleteUserStart())

         axios.delete(`/users/${id}`)
            .then(resp => {
                dispatch(deleteUserSuccess());
            })
            .catch(err => {
                dispatch(deleteUserFail(err));
            })
    }
}



// User filter functions

export const updateUserFilter = (type, value) => {
    return {
        type: actionTypes.UPDATE_USER_FILTER,
        payload: { type, value }
    };
}

export const resetUserFilter = (type, value) => {
    return {
        type: actionTypes.RESET_USER_FILTER
    };
}

export const removeSelectedUser = () => {
    return {
        type: actionTypes.REMOVE_SELECTED_USER
    }
}