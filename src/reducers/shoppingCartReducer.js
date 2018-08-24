import * as ActionTypes from '../actionTypes/actionTypes';

const shoppingCartReducer = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.BUY_ITEM:
            if (!state.includes(action.payload)) {
                action.payload.counter = 1;
                action.payload.items -= 1;
                return [
                    ...state,
                    action.payload
                ];
            } else {
                let item = state[state.indexOf(action.payload)];
                if(item.items <= 0) {
                    alert('Item out of stock');
                } else {
                    item.counter += 1;
                    item.items -= 1;
                }
                
                return [...state];
            }
        default:
            return state;
    }
};

export default shoppingCartReducer;