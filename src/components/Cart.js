import React from 'react';
import CartItem from './CartItem';

const ShoppingCart = props => {

    let totalPrice = props.cartItems.reduce((acc, item)=>acc+item.price,0);

    return(
        <div className="shopping-cart">
            <h2>Shopping Cart</h2>
            <ul className="cart-items">
                {props.cartItems.map(item=>
                    <CartItem key={item.name} {...item}/>
                )}
            </ul>
            <div className="cart-footer">
                <p>Total Price: {totalPrice}</p>
            </div>
        </div>
    );
};

export default ShoppingCart;