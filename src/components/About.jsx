import React, { useEffect } from 'react';
import { Link } from "react-router-dom"

// Images
import installPortrait from '../assets/installportrait.jpeg';
import portrait2 from '../assets/portrait2.JPG';

// Utilities
import scrollToTop from '../utilities/scrollToTop';

const About = () => {

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <section className="fadeIn wrapper about">
            <div className="imageContainer">
                <img src={portrait2} alt="" className="installPortrait" />
                <img src={installPortrait} alt="" className="installPortrait" />
            </div>

            <h2>about</h2>
            <p>Hi! I'm an interdiscipilary feminist artist and occasional curator based in Toronto. My subject matter is mostly nude portraits, which contemplate sexuality and reclamation through self-representation. In 2019, I completed my MFA at OCAD U. When I am not painting nudes, I work with clients to create honest and minimalist illustration content. Some past clients include: Knix, H&M, Rethink Breast Cancer, TKEES, LOVEFRESH, and Mary Young.</p>
        </section>
    );
};

export default About;