import * as actionTypes from './actionTypes';
import axios from '../../shared/axios-api';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = payload => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload
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
        const authData = {
                username: payload.username,
                password: payload.password
            }
        
        axios.post('/authenticate', authData)
            .then(response => {
                localStorage.setItem('token', response.data.auth_token);
                dispatch(authSuccess({ token: response.data.auth_token, id: response.data.id }));
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
            dispatch(authSuccess({ token }))
        }
    };
};

export const userSignUpStart = () => {
    return {
        type: actionTypes.USER_SIGN_UP_START
    };
};

export const userSignUpSuccess = () => {
    return {
        type: actionTypes.USER_SIGN_UP_SUCCESS,
    };
};

export const userSignUpFail = (error) => {
    return {
        type: actionTypes.USER_SIGN_UP_FAIL,
        error
    };
};

export const handleUserSignUp = payload => {
    return dispatch => {
        dispatch(userSignUpStart());

        const userData = {
            username: payload.username,
            password: payload.password,
            password_confirmation: payload.password_confirmation,
            email: payload.email,
            neighborhood_id: payload.neighborhood_id
        };

        axios.post('/users', { user: userData})
            .then(response => {
                dispatch(userSignUpSuccess())
                dispatch(handleUserLogin(userData))
            })
            .catch(err => {
                console.log(err)
                dispatch(userSignUpFail(err.response.data.error));
            });
    };
}


