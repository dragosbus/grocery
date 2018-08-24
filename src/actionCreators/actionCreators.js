import * as ActionTypes from '../actionTypes/actionTypes';

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