import React from 'react';
import { Link } from "react-router-dom";

// Animations
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

// Images
import youAreGood from '../assets/youaregood.png';
import colon from '../assets/colon.svg';

const Footer = () => {
    return (
        <ScrollAnimation animateIn="fadeIn" duration={0.5} offset={100} delay={0.5} className="footer">
            <div className="footerContainer wrapper">
                {/* <div>
                    <h1><Link to="/">quinn rockliff</Link></h1>
                </div> */}

                <div className="innerContainer">
                    <ul className="footerNav">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/commissions">Commissions</Link></li>
                        <li><Link to="/work">Work</Link></li>
                        <li><Link to="/press">Press</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>

                    <div className="contact">
                        <p>say hello <img src={colon} alt="" className="colon" /></p>
                        <p>quinnrockliff@gmail.com</p>
                    </div>
                </div>

                <div className="youAreGood">
                    <img src={youAreGood} alt="" />
                </div>
            </div>
            <div className="credit wrapper">
                <p>Copyright 2020 Quinn Rockliff. All rights reserved.</p>
                <p>Designed and coded by <a href="https://www.sandy.codes" target="blank">Sandy Iris Pranjic</a>.</p>
            </div>
        </ScrollAnimation>
    );
};

export default Footer;