import React from 'react';


const ShoppingCart = props => {

    let totalPrice = props.cartItems.reduce((acc, item)=>acc+item.price,0);

    return(
        <div className="shopping-cart">
            <h2>Shopping Cart</h2>
            <div className="cart-footer">
                <p>Total Price: {totalPrice}</p>
            </div>
        </div>
    );
};

export default ShoppingCart;