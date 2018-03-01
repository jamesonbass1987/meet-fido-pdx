import * as actionTypes from './actionTypes';
import axios from '../../shared/axios-api';

// SHARED AUTH ACTIONS

export const authActionStart = () => ({
    type: actionTypes.AUTH_ACTION_START
});

export const authActionFail = error => ({
    type: actionTypes.AUTH_ACTION_FAIL,
    error
});

// AUTHENTICATION ACTIONS

export const handleUserLogin = (payload) => {
    return dispatch => {
        dispatch(authActionStart());
        const authData = {
                username: payload.username,
                password: payload.password
            }
        
        axios.post('/authenticate', authData)
            .then(response => {
                localStorage.setItem('token', response.data.auth_token);
                dispatch(authSuccess({ token: response.data.auth_token, user: response.data.user }));
            })
            .catch(err => {
                dispatch(authActionFail(err.response.data.error.user_authentication));
            });
    };
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(handleLogout());
        } else {
            axios.get(`/authed_user?token=${token}`)
                .then(response => {
                    dispatch(authSuccess({ token, user: response.data }))
                })
                .catch(err => {
                    debugger;
                    dispatch(authActionFail(err.response.data.error));
                });
            
        };
    };
};

export const authSuccess = payload => ({
    type: actionTypes.AUTH_SUCCESS,
    payload
});

export const updateAuthenticatingState = () => ({
    type: actionTypes.UPDATE_AUTHENTICATING_STATE
});

// USER LOGOUT ACTIONS

export const handleLogout = () => {
    localStorage.removeItem('token');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const removeCurrentUser = () => ({
    type: actionTypes.REMOVE_CURRENT_USER
});

// USER SIGN UP ACTIONS

export const userSignUpSuccess = () => ({
    type: actionTypes.USER_SIGN_UP_SUCCESS,
});

export const handleUserSignUp = payload => {
    return dispatch => {
        dispatch(authActionStart());

        const userData = {
            username: payload.username,
            password: payload.password,
            password_confirmation: payload.password_confirmation,
            email: payload.email,
            neighborhood_id: payload.neighborhood_id
        };

        axios.post('/users', { user: userData})
            .then(response => {
                dispatch(userSignUpSuccess());
                dispatch(handleUserLogin(userData));
            })
            .catch(err => {
                const errors = [];
                for(let errMsgKey in err.response.data.error){
                    errors.push(`${errMsgKey.split('_').join(" ")} ${err.response.data.error[errMsgKey]}`);
                }
                dispatch(authActionFail(errors));
            });
    };
};

export const updateSignUpState = () => ({
    type: actionTypes.UPDATE_SIGN_UP_STATE
});

// FETCH USER ACTIONS

export const fetchCurrentUser = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch({ type: actionTypes.AUTH_LOGOUT });
        } else {
            dispatch(authActionStart())
            axios.get(`/authed_user?token=${token}`)
                .then(response => {
                    dispatch(fetchCurrentUserSuccess(response.data))
                })
                .catch(err => {
                    dispatch(authActionFail(err.response.data.error))
                })
        };
    };
};

export const fetchCurrentUserSuccess = payload => {
    return {
        type: actionTypes.FETCH_CURRENT_USER_SUCCESS,
        payload
    };
};

// UPDATE USER ACTIONS

export const updateCurrentUser = (user, attribute, updateVals) => {
    console.log(user, attribute, updateVals)
    let updatedUser = {
        username: user.username,
        bio: user.bio,
        email: user.email,
        profile_image_url: user.profile_image_url,
        dog_ids: user.dogs.map(dog => (dog.id)),
        neighborhood_id: user.neighborhood.id,
        park_ids: user.parks.map(park => (park.id)),
    };

    if (attribute === 'parksList') {
        updatedUser.park_ids = updateParks(updatedUser.park_ids, updateVals);
    } else if (attribute === 'profileUpdate') {
        updatedUser = {
            ...updatedUser,
            ...updateVals
        };
    };

    return dispatch => {
        dispatch(authActionStart())
        axios.patch(`/users/${user.id}`, { id: user.id, user: { ...updatedUser } })
            .then(resp => {
                dispatch(updateCurrentUserSuccess())
            })
            .catch(err => {
                dispatch(authActionFail(err.response.data.error))
            })
    }
}

const updateParks = (parkIds, value) => (
    parkIds.some(id => (id === value)) ? 
                                    parkIds.filter(id => (id !== value)) : 
                                    [...parkIds, value]
);

export const updateCurrentUserSuccess = () => ({
        type: actionTypes.UPDATE_CURRENT_USER_SUCCESS
});
