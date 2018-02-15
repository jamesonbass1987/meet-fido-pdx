import { combineReducers } from 'redux';
import dogReducer from './dog';
import parkReducer from './park';

export const rootReducer = combineReducers({
    park: parkReducer,
    dog: dogReducer
});

