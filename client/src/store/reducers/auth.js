import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';


const initialState = {
    isAuthenticating: false,
    isSigningUp: false,
    loading: false,
    error: null,
    token: null
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
        token: action.token,
        isAuthenticating: false,
        error: null,
        loading: false
    });
};

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_AUTHENTICATING_STATE: return updateAuthenticatingState(state);
        case actionTypes.UPDATE_SIGN_UP_STATE: return updateSignUpState(state);
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        default: return state
    }
}

export default authReducer;