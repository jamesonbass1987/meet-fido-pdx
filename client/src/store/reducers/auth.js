import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';


const initialState = {
    isAuthenticating: false,
    isSigningUp: false,
    loading: false,
    error: null,
    token: null,
    currentUserId: null,
}

const updateAuthenticatingState = state => {
    return updateObject(state, {isAuthenticating: !state.isAuthenticating})
}

const updateSignUpState = state => {
    return updateObject(state, { isSigningUp: !state.isSigningUp })
}

const authStart = (state, action) => {
    return updateObject(state, { error: null, loading: true });
};

const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.payload.token,
        isAuthenticating: false,
        error: null,
        loading: false,
    });
};

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};

const userSignUpStart = (state, action) => {
    return updateObject(state, { error: null, loading: true });
};

const userSignUpSuccess = state => {
    return updateObject(state, {
        isSigningUp: false,
        error: null,
        loading: false
    });
};

const userSignUpFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};

const authLogout = (state, action) => {
    return updateObject(state, { token: null, currentUserId: null });
};

const fetchCurrentUserStart = state => {
    return updateObject(state, { loading: true });
};

const fetchCurrentUserSuccess = (state, action) => {
    return updateObject(state, {
        currentUserId: action.payload.user_id,
        loading: false
    });
};

const fetchCurrentUserFail = state => {
    return updateObject(state, { loading: false });
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_AUTHENTICATING_STATE: return updateAuthenticatingState(state);
        case actionTypes.UPDATE_SIGN_UP_STATE: return updateSignUpState(state);
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.USER_SIGN_UP_START: return userSignUpStart(state, action);       
        case actionTypes.USER_SIGN_UP_FAIL: return userSignUpFail(state, action);
        case actionTypes.USER_SIGN_UP_SUCCESS: return userSignUpSuccess(state);
        case actionTypes.FETCH_CURRENT_USER_START: return fetchCurrentUserStart(state);
        case actionTypes.FETCH_CURRENT_USER_SUCCESS: return fetchCurrentUserSuccess(state, action);
        case actionTypes.FETCH_CURRENT_USER_FAIL: return fetchCurrentUserFail(state);

        default: return state
    }
}

export default authReducer;