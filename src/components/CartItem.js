import React from 'react';


const CartItem = props => (
    <li>
        <p>{props.name}</p>
        <p>{props.counter}</p>
        <button onClick={props.returnOneItem}>Return one item</button>
    </li>
);

export default CartItem;