import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    isAuthenticating: false,
    isSigningUp: false
}

const updateAuthenticatingState = state => {
    return updateObject(state, {isAuthenticating: !state.isAuthenticating})
}

const updateSignUpState = state => {
    return updateObject(state, { isSigningUp: !state.isSigningUp })
}

const swapAuthSignUpStates = state => {
    return updateObject(state, {
        isSigningUp: !state.isSigningUp,
        isAuthenticating: !state.isAuthenticating
    })
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_AUTHENTICATING_STATE: return updateAuthenticatingState(state);
        case actionTypes.UPDATE_SIGN_UP_STATE: return updateSignUpState(state);
        case actionTypes.SWAP_AUTH_SIGN_UP_STATES: return swapAuthSignUpStates(state);
        default: return state
    }
}

export default authReducer;