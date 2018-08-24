import * as ActionTypes from '../actionTypes/actionTypes';

export const getItems = data => ({
    type: ActionTypes.GET_ITEMS,
    payload: data
});