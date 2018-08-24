import * as ActionTypes from '../actionTypes/actionTypes';

const shoppingCartReducer = (state=[], action) => {
    switch(action.type) {
        case ActionTypes.BUY_ITEM:
            console.log(action.item)
            return [...state, action.payload];
        default:
            return state;
    }
};

export default shoppingCartReducer;