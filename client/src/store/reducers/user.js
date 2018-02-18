import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    users: [],
    loading: false,
    selectedUser: null,
    userFilter: {
        searchQuery: ''
    }
}

const fetchUsersStart = state => {
    return updateObject(state, { loading: true });
};

const fetchUsersSuccess = (state, action) => {
    return updateObject(state, {
        users: action.users,
        loading: false,
    });
};

const fetchUsersFail = state => {
    return updateObject(state, { loading: false });
};

const fetchUserStart = state => {
    return updateObject(state, { loading: true });
};

const fetchUserSuccess = (state, action) => {
    return updateObject(state, {
        selectedUser: action.user,
        loading: false
    });
};

const fetchUserFail = state => {
    return updateObject(state, { loading: false });
};

const updateUserFilter = (state, action) => {
    return updateObject(state, {
        userFilter: {
            ...state.userFilter,
            [action.payload.type]: action.payload.value
        }
    })
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USERS_START: return fetchUsersStart(state);
        case actionTypes.FETCH_USERS_SUCCESS: return fetchUsersSuccess(state, action);
        case actionTypes.FETCH_USERS_FAIL: return fetchUsersFail(state);
        case actionTypes.FETCH_USER_START: return fetchUserStart(state);
        case actionTypes.FETCH_USER_SUCCESS: return fetchUserSuccess(state, action);
        case actionTypes.FETCH_USER_FAIL: return fetchUserFail(state);
        case actionTypes.UPDATE_USER_FILTER: return updateUserFilter(state, action);
        default: return state
    }
}

export default userReducer;