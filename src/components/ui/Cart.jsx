import React, { useEffect } from 'react';
import ItemInCart from './ItemInCart';

// Images
import close from '../../assets/close.svg';

const Cart = ({ hideCart, showCart, shoppingCart, updateQuantity }) => {

    useEffect(() => {
        const global = document.getElementById('global');
        if (showCart) {
            global.style.opacity = '0.5';
        } else {
            global.style.opacity = '1';
        }
    }, [showCart]);

    return (
        <div id="cart" className={showCart ? 'cart showCart' : 'cart'}>
            <div className="cartHeader">
                <button type="button" onClick={hideCart}>
                    <img src={close} alt="Close Cart" />
                </button>
                <h2>Cart</h2>
            </div>

            {
                shoppingCart && shoppingCart.lineItems && shoppingCart.lineItems.length !== 0
                    ? (
                        <div className="items">
                            {
                                shoppingCart.lineItems.map((item) => (
                                    <ItemInCart 
                                        item={item} 
                                        updateQuantity={updateQuantity} 
                                        key={item.id}
                                    />
                                ))
                            }
                        </div>
                    )
                    : (
                        <div className="emptyCart">
                            <span>Your cart is empty. :(</span>
                        </div>
                    )
            }

            {
                shoppingCart && shoppingCart.lineItems && shoppingCart.lineItems.length !== 0
                    ? (
                        <div className="proceedToCheckout">
                            <span>Subtotal: ${shoppingCart.totalPrice}</span>
                            <a href={shoppingCart.webUrl}>Proceed to Checkout</a>
                        </div>
                    )
                    : null
            }
        </div>
    )
};

export default Cart;
