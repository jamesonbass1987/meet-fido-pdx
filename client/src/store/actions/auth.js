import * as actionTypes from './actionTypes';


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

export const swapAuthSignUpStates = () => {
    return {
        type: actionTypes.SWAP_AUTH_SIGN_UP_STATES
    }
}