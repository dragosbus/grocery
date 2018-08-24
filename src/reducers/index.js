import {combineReducers} from 'redux';
import groceryReducer from './groceryReducer';
import shoppingCartReducer from './shoppingCartReducer';

const rootReducer = combineReducers({
    grocery: groceryReducer,
    shoppingCart: shoppingCartReducer
});

export default rootReducer;