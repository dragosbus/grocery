import React from 'react';
import CartItem from './CartItem';

const ShoppingCart = props => {
  let totalPrice = props.cartItems.reduce((acc, item) => acc + item.price * item.counter, 0);

  let itemsList =
    props.cartItems.length > 0 ? (
      <ul className="cart-items">
        <button className="btn" onClick={()=>props.emptyCart(props.cartItems)}>
            Empty Cart
        </button>
        {props.cartItems.map((item, i) => (
          <CartItem
            key={item.name}
            {...item}
            returnOneItem={() => props.returnOneItem(props.cartItems[i])}
            returnAllItems={() => props.returnAllItems(props.cartItems[i])}
          />
        ))}
      </ul>
    ) : (
      <p>The cart is empty</p>
    );

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {itemsList}
      <div className="cart-footer">
        <p>Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default ShoppingCart;
