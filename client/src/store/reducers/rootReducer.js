import { combineReducers } from 'redux';
import dogReducer from './dog';
import parkReducer from './park';
import authReducer from './auth';

export const rootReducer = combineReducers({
    park: parkReducer,
    dog: dogReducer,
    auth: authReducer
});

