import * as actionTypes from './actionTypes';
import axios from '../../shared/axios-api';


// USER INDEX ACTIONS

export const fetchUsersSuccess = (users) => {
    return {
        type: actionTypes.FETCH_USERS_SUCCESS,
        users: users
    };
};

export const fetchUsersFail = (error) => {
    return {
        type: actionTypes.FETCH_USERS_FAIL,
        error: error
    };
};

export const fetchUsersStart = () => {
    return {
        type: actionTypes.FETCH_USERS_START
    };
};

export const fetchUsers = () => {
    return dispatch => {

        dispatch(fetchUsersStart());
        axios.get('/users')
            .then(res => {
                const fetchedUsers = [...res.data];
                dispatch(fetchUsersSuccess(fetchedUsers));
            })
            .catch(err => {
                dispatch(fetchUsersFail(err));
            });
    };
};

// USER SHOW ACTIONS

export const fetchUserSuccess = (user) => {
    return {
        type: actionTypes.FETCH_USER_SUCCESS,
        user
    };
};

export const fetchUserFail = (error) => {
    return {
        type: actionTypes.FETCH_USER_FAIL,
        error
    };
};

export const fetchUserStart = () => {
    return {
        type: actionTypes.FETCH_USER_START
    };
};

export const fetchUser = id => {
    return dispatch => {
        dispatch(fetchUsersStart());
        axios.get(`/users/${id}`)
            .then(res => {
                const fetchedUser = res.data;
                dispatch(fetchUserSuccess(fetchedUser));
            })
            .catch(err => {
                dispatch(fetchUserFail(err));
            });
    };
};


// USER DELETE ACTIONS

export const deleteUserSuccess = () => {
    return {
        type: actionTypes.DELETE_USER_SUCCESS
    };
};

export const deleteUserFail = (error) => {
    return {
        type: actionTypes.DELETE_USER_FAIL,
        error: error
    };
};

export const deleteUserStart = () => {
    return {
        type: actionTypes.DELETE_USER_START
    };
};

export const deleteUser = (id) => {
    return dispatch => {
         dispatch(deleteUserStart())

         axios.delete(`/users/${id}`)
            .then(resp => {
                dispatch(deleteUserSuccess());
            })
            .catch(err => {
                dispatch(deleteUserFail(err));
            })
    }
}



// User filter functions

export const updateUserFilter = (type, value) => {
    return {
        type: actionTypes.UPDATE_USER_FILTER,
        payload: { type, value }
    };
}

export const resetUserFilter = (type, value) => {
    return {
        type: actionTypes.RESET_USER_FILTER
    };
}

export const removeSelectedUser = () => {
    return {
        type: actionTypes.REMOVE_SELECTED_USER
    }
}

export const removeCurrentUser = () => {
    return {
        type: actionTypes.REMOVE_CURRENT_USER
    }
}


export const fetchCurrentUser = () => {
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


// Update User Parks

export const updateUserSuccess = user => {
    return {
        type: actionTypes.UPDATE_USER_SUCCESS,
        user
    };
};

export const updateUserFail = (error) => {
    return {
        type: actionTypes.UPDATE_USER_FAIL,
        error: error
    };
};

export const updateUserStart = () => {
    return {
        type: actionTypes.UPDATE_USER_START
    };
};

export const updateUser = (user, attribute, value) => {
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
        updatedUser.park_ids = updateParks(updatedUser.park_ids, value)
    }
    return dispatch => {
        dispatch(updateUserStart())
        axios.patch(`/users/${user.id}`, { id: user.id, user: {...updatedUser} })
            .then(resp => {

                dispatch(updateUserSuccess());
            })
            .catch(err => {
                dispatch(updateUserFail(err));
            })
    }
}

const updateParks = (parkIds, value) => {
    return parkIds.some(id => (id === value)) ? 
        parkIds.filter(id => (id !== value)) :
        parkIds.push(value)
}