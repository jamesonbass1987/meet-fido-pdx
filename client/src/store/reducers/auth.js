import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    isAuthenticating: false,
}

const updateAuthenticatingState = state => {
    return updateObject(state, {isAuthenticating: !state.isAuthenticating})
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_AUTHENTICATING_STATE: return updateAuthenticatingState(state);
        default: return state
    }
}

export default authReducer;