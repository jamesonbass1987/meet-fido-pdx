import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    users: [],
    loading: false,
    selectedUser: null,
    userFilter: {
        searchQuery: '',
        selectedPark: ''
    },
    isUpdating: false
}

const userActionStart = state => (updateObject(state, { loading: true }));
const userActionFail = state => (updateObject(state, { loading: false }));

const fetchUserSuccess = (state, action) => {
    return updateObject(state, {
        selectedUser: action.user,
        loading: false
    })
};

const fetchUsersSuccess = (state, action) => (
    updateObject(state, {
        users: action.users,
        loading: false,
    })
);

const deleteUserSuccess = (state, action) => (
    updateObject(state, {
        loading: false,
    })
);

// const removeSelectedUser = state => (
//     updateObject(state, {
//         selectedUser: null
//     })
// );

const updateUserFilter = (state, action) => (
    updateObject(state, {
        userFilter: {
            ...state.userFilter,
            [action.payload.type]: action.payload.value
        }
    })
);

const resetUserFilter = (state, action) => (
    updateObject(state, {
        userFilter: {
            searchQuery: '',
            selectedPark: ''
        }
    })
);

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_ACTION_START: return userActionStart(state);
        case actionTypes.USER_ACTION_FAIL: return userActionFail(state, action);
        case actionTypes.FETCH_USER_SUCCESS: return fetchUserSuccess(state, action);
        case actionTypes.FETCH_USERS_SUCCESS: return fetchUsersSuccess(state, action);
        case actionTypes.DELETE_USER_SUCCESS: return deleteUserSuccess(state);
        // case actionTypes.REMOVE_SELECTED_USER: return removeSelectedUser(state);
        case actionTypes.UPDATE_USER_FILTER: return updateUserFilter(state, action);
        case actionTypes.RESET_USER_FILTER: return resetUserFilter(state, action);
        default: return state
    }
}

export default userReducer;