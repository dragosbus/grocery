import * as ActionTypes from '../actionTypes/actionTypes';

const shoppingCartReducer = (state=[], action) => {
    switch(action.type) {
        case ActionTypes.BUY_ITEM:
            return [...state, action.item];
        default:
            return state;
    }
};

export default shoppingCartReducer;