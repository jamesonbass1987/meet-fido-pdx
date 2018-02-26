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

const fetchUserAssetStart = state => (updateObject(state, { loading: true }));
const fetchUserAssetFail = (state, action) => (updateObject(state, { loading: false, error: action.error }));

const fetchUserSuccess = (state, action) => (
    updateObject(state, {
        selectedUser: action.user,
        loading: false
    })
);

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

const removeSelectedUser = state => (
    updateObject(state, {
        selectedUser: null
    })
);

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
        case actionTypes.FETCH_USER_ASSET_START: return fetchUserAssetStart(state);
        case actionTypes.FETCH_USER_ASSET_FAIL: return fetchUserAssetFail(state, action);
        case actionTypes.FETCH_USER_SUCCESS: return fetchUserSuccess(state, action);
        case actionTypes.FETCH_USERS_SUCCESS: return fetchUsersSuccess(state, action);
        case actionTypes.DELETE_USER_SUCCESS: return deleteUserSuccess(state);
        case actionTypes.REMOVE_SELECTED_USER: return removeSelectedUser(state);
        case actionTypes.UPDATE_USER_FILTER: return updateUserFilter(state, action);
        case actionTypes.RESET_USER_FILTER: return resetUserFilter(state, action);
        default: return state
    }
}

export default userReducer;