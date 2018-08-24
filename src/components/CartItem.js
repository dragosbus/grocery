import React from 'react';

const CartItem = props => (
  <li className="cart-item">
    <p>{props.name}</p>
    <p>-{props.counter}</p>
    <div>
      <button className="btn" onClick={props.returnOneItem}>
        Return one item
      </button>
      <button className="btn" onClick={props.returnAllItems}>
        Return all items
      </button>
    </div>
  </li>
);

export default CartItem;
