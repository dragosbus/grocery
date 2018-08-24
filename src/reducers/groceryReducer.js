import * as ActionTypes from '../actionTypes/actionTypes';

const groceryReducer = (state=[], action) => {
    switch(action.type) {
        case ActionTypes.GET_ITEMS:
            return [...action.payload];
        default:
            return state;
    }
};

export default groceryReducer;