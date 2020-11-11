import React, { useEffect } from 'react';

// Images
import close from '../../assets/close.svg';

const Cart = ({ hideCart, showCart, shoppingCart }) => {

    useEffect(() => {
        if (shoppingCart && shoppingCart.lineItems) {
            shoppingCart.lineItems.forEach((item) => {
                console.log('VARIANT DATA HERE -------->', item.variant.image.src);
            });
        }
    }, [shoppingCart]);

    useEffect(() => {
        const cart = document.getElementById('cart');
        const global = document.getElementById('global');
        if (showCart) {
            global.style.overflow = 'hidden';
            global.style.maxHeight = '100vh';
            global.style.opacity = '0.5';
        } else {
            global.style.overflow = 'scroll';
            global.style.opacity = '1';
        }
    }, [showCart]);

    const pricesTimesQuantity = (price, quantity) => {
        const total = parseInt(price, 10) * quantity;
        const formatted = total.toFixed(2);
        const string = `$${formatted}`;
        return string;
    };

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
                                    <div key={item.id} className="itemInCart">
                                        <h3>{item.quantity} x {item.title} - 
                                        {pricesTimesQuantity(item.attrs.variant.price, item.quantity)}
                                        </h3>
                                        <img src={item.variant.image.src} alt="" />
                                    </div>
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
