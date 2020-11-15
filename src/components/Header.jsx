import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import menu from '../assets/menu.svg';

// Images
import cart from '../assets/cart.svg';

const Header = ({ shoppingCart, showCart, hideCart, toggleCart, showMobileNav }) => {

    return (
        <header className="fadeIn">
            <div className="headerContainer wrapper">
                <button onClick={showMobileNav} className="menuIcon mobileOnly">
                    <img src={menu} alt="Navigation" />
                </button>
                <div>
                    <h1><Link to="/">quinn rockliff</Link></h1>
                </div>

                <nav className="mainNav hiddenOnMobile">
                    <Link to="/">Shop</Link>
                    <Link to="/commissions">Commissions</Link>
                    <Link to="/press">Press</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav>

                <div className="cartContainer">
                    <button type="button" onClick={() => { toggleCart(); }}>
                        <img src={cart} alt="Shopping Cart" />
                    </button>
                    <span className="cartCounter">
                        {shoppingCart && shoppingCart.lineItems ? shoppingCart.lineItems.length : null}
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;