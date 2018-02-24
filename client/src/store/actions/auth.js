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

export const removeCurrentUser = () => {
    return {
        type: actionTypes.REMOVE_CURRENT_USER
    }
}


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
                dispatch(authSuccess({ token: response.data.auth_token, user: response.data.user }));
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
                const errors = [];
                for(let errMsgKey in err.response.data.error){
                    errors.push(`${errMsgKey.split('_').join(" ")} ${err.response.data.error[errMsgKey]}`)
                }

                dispatch(userSignUpFail(errors));
            });
    };
}





export const fetchCurrentUser = () => {
    console.log('fetching current user...')
    return dispatch => {
        dispatch(fetchCurrentUserStart());
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch({ type: actionTypes.AUTH_LOGOUT });
        } else {
            axios.get(`/authed_user?token=${token}`)
                .then(response => {
                    dispatch(fetchCurrentUserSuccess(response.data))
                })
                .catch(err => {
                    dispatch(fetchCurrentUserFail(err.response.data.error));
                });
        }
    }
}

export const fetchCurrentUserStart = (user) => {
    return {
        type: actionTypes.FETCH_CURRENT_USER_START
    };
};

export const fetchCurrentUserFail = (error) => {
    return {
        type: actionTypes.FETCH_CURRENT_USER_FAIL,
        error
    };
};

export const fetchCurrentUserSuccess = payload => {
    return {
        type: actionTypes.FETCH_CURRENT_USER_SUCCESS,
        payload
    };
};

// Update Current User Data

export const updateCurrentUserSuccess = user => {
    return {
        type: actionTypes.UPDATE_CURRENT_USER_SUCCESS,
        user
    };
};

export const updateCurrentUserFail = (error) => {
    return {
        type: actionTypes.UPDATE_CURRENT_USER_FAIL,
        error: error
    };
};

export const updateCurrentUserStart = () => {
    return {
        type: actionTypes.UPDATE_CURRENT_USER_START
    };
};

export const updateCurrentUser = (user, attribute, updateVals) => {

    let updatedUser = {
        username: user.username,
        bio: user.bio,
        email: user.email,
        profile_image_url: user.profile_image_url,
        dog_ids: user.dogs.map(dog => (dog.id)),
        neighborhood_id: user.neighborhood.id,
        park_ids: user.parks.map(park => (park.id)),
    }
    if (attribute === 'parksList') {
        updatedUser.park_ids = updateParks(updatedUser.park_ids, updateVals)
    } else if (attribute === 'profileUpdate') {
        updatedUser = {
            ...updatedUser,
            ...updateVals
        }
    }

    return dispatch => {
        dispatch(updateCurrentUserStart())
        axios.patch(`/users/${user.id}`, { id: user.id, user: { ...updatedUser } })
            .then(resp => {
                dispatch(fetchCurrentUser())
                dispatch(updateCurrentUserSuccess(resp));
            })
            .catch(err => {
                dispatch(updateCurrentUserFail(err));
            })
    }
}

const updateParks = (parkIds, value) => {
    return parkIds.some(id => (id === value)) ? parkIds.filter(id => (id !== value)) : [...parkIds, value];
}