import * as ActionTypes from '../actionTypes/actionTypes';
import * as db from '../config/firebase';

export const getItems = data => ({
    type: ActionTypes.GET_ITEMS,
    payload: data
});

export const buyItem = item => ({
    type: ActionTypes.BUY_ITEM,
    payload: item
});

export const returnOneItem = item => ({
    type: ActionTypes.RETURN_ONE_ITEM,
    payload: item
});

export const returnAllItems = item => ({
    type: ActionTypes.RETURN_ALL_ITEMS,
    payload: item
});

export const emptyCart = (data) => ({
    type: ActionTypes.EMPTY_CART,
    payload: data
});

export const fetchData = () => dispatch => {
    db.default.firebase_.database().ref().child('items').once('value').then(snapshot=>snapshot.val()).then(res=>{
    dispatch(getItems(res)); 
    });
};