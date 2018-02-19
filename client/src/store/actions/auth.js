import * as actionTypes from './actionTypes';
import axios from '../../shared/axios-api';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error
    };
};

export const handleLogout = () => {
    localStorage.removeItem('token');
    return {
        type: actionTypes.AUTH_LOGOUT
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
    return dispatch => {
        dispatch(authStart());
        const authData = { "auth": {
                username: payload.username,
                password: payload.password
            }
        };

        axios.post('/user_token', authData)
            .then(response => {
                localStorage.setItem('token', response.data.jwt);
                dispatch(authSuccess(response.data.jwt));
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error));
            });
    };
}


export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(handleLogout());
        } else {
            const token = localStorage.getItem('userId');
            dispatch(authSuccess(token))
        }
    };
};