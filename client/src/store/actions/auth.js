import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};


export const updateAuthenticatingState = () => {
    return {
        type: actionTypes.UPDATE_AUTHENTICATING_STATE
    }
}

export const updateSignUpState = () => {
    return {
        type: actionTypes.UPDATE_SIGN_UP_STATE
    }
}

export const handleUserLogin = (payload) => {
    return {
        type: actionTypes.HANDLE_USER_LOGIN,
        payload
    }
}