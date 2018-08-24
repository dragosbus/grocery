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
        case ActionTypes.RETURN_ONE_ITEM:
            if(action.payload.counter > 1) {
                action.payload.counter -= 1;
                action.payload.items += 1;
                return [...state];
            } else {
                action.payload.items += 1;
                return state.filter(items=>items !== action.payload);
            }
        case ActionTypes.RETURN_ALL_ITEMS:
            action.payload.items += action.payload.counter;
            return state.filter(item=>item!==action.payload);
        default:
            return state;
    }
};

export default shoppingCartReducer;