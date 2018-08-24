import {combineReducers} from 'redux';
import groceryReducer from './groceryReducer';

const rootReducer = combineReducers({
    grocery: groceryReducer
});

export default rootReducer;