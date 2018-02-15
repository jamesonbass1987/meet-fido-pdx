import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {

}

const dogReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ACTION_TYPE':
            return
        default:
            return state
    }
}

export default dogReducer;