import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    users: [],
    loading: false,
    selectedUser: null,
    userFilter: {
        searchQuery: '',
        selectedPark: ''
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

const deleteUserStart = state => {
    return updateObject(state, { loading: true });
};

const deleteUserSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: false,
    });
};

const deleteUserFail = state => {
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

const resetUserFilter = (state, action) => {
    return updateObject(state, {
        userFilter: {
            searchQuery: '',
            selectedPark: ''
        }
    })
}

const removeSelectedUser = (state) => {
    return updateObject(state, {
        selectedUser: null
    })
}

const updateUserStart = state => {
    return updateObject(state, { loading: true });
};

const updateUserSuccess = state => {
    return updateObject(state, {
        error: null,
        loading: false,
    });
};

const updateUserFail = state => {
    return updateObject(state, { loading: false });
}

const fetchCurrentUserStart = state => {
    return updateObject(state, { loading: true });
};

const fetchCurrentUserSuccess = (state, action) => {
    return updateObject(state, {
        currentUser: action.payload,
        loading: false
    });
};

const fetchCurrentUserFail = state => {
    return updateObject(state, { loading: false });
};

const removeCurrentUser = state => {
    return updateObject(state, { currentUser: null })
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
        case actionTypes.RESET_USER_FILTER: return resetUserFilter(state, action);
        case actionTypes.DELETE_USER_START: return deleteUserStart(state);
        case actionTypes.DELETE_USER_SUCCESS: return deleteUserSuccess(state);
        case actionTypes.DELETE_USER_FAIL: return deleteUserFail(state);
        case actionTypes.REMOVE_SELECTED_USER: return removeSelectedUser(state);
        case actionTypes.UPDATE_USER_START: return updateUserStart(state);
        case actionTypes.UPDATE_USER_SUCCESS: return updateUserSuccess(state);
        case actionTypes.UPDATE_USER_FAIL: return updateUserFail(state);
        case actionTypes.FETCH_CURRENT_USER_START: return fetchCurrentUserStart(state);
        case actionTypes.FETCH_CURRENT_USER_SUCCESS: return fetchCurrentUserSuccess(state, action);
        case actionTypes.FETCH_CURRENT_USER_FAIL: return fetchCurrentUserFail(state);
        case actionTypes.REMOVE_CURRENT_USER: return removeCurrentUser(state);
        default: return state
    }
}

export default userReducer;