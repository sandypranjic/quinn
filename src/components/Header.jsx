import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Cart from './ui/Cart';

// Images
import cart from '../assets/cart.svg';

const Header = ({ shoppingCart, showCart, hideCart, toggleCart }) => {
    useEffect(() => {
        console.log(shoppingCart);
    }, [shoppingCart]);

    return (
        <header className="fadeIn">
            <div className="headerContainer wrapper">
                <div>
                    <h1><Link to="/">quinn rockliff</Link></h1>
                </div>

                <nav className="mainNav">
                    <Link to="/">Shop</Link>
                    <Link to="/commissions">Commissions</Link>
                    <Link to="/work">Work</Link>
                    <Link to="/press">Press</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav>

                <div className="cartContainer">
                    <button type="button" onClick={() => { toggleCart(); }}>
                        <img src={cart} alt="Shopping Cart" />
                    </button>
                    <span className="cartCounter">
                        {shoppingCart.lineItems.length}
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;