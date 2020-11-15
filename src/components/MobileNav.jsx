import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

// Images
import close from '../assets/close.svg';

const MobileNav = ({ showNav, showMobileNav }) => {
    return (
        <div className={showNav ? 'mobileNavContainer mobileOnly showNav' : 'mobileNavContainer mobileOnly'}>
            <div className="closeNav">
                <button type="button" onClick={showMobileNav}>
                    <img src={close} alt="" />
                </button>
            </div>
            <nav>
                <Link onClick={showMobileNav} to="/">Shop</Link>
                <Link onClick={showMobileNav} to="/commissions">Commissions</Link>
                <Link onClick={showMobileNav} to="/press">Press</Link>
                <Link onClick={showMobileNav} to="/about">About</Link>
                <Link onClick={showMobileNav} to="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default MobileNav;
