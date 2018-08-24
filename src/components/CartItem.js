import React from 'react';


const CartItem = props => (
    <li>
        <p>{props.name}</p>
        <p>{props.counter}</p>
    </li>
);

export default CartItem;