import React, { useEffect } from 'react';

// Animations
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

// Images
import commission1 from '../assets/commissions/commission1.jpg';
import commission2 from '../assets/commissions/commission2.JPG';
import commission3 from '../assets/commissions/commission3.JPG';
import commission4 from '../assets/commissions/commission4.jpg';
import commission5 from '../assets/commissions/commission5.jpg';
import commission6 from '../assets/commissions/commission6.JPG';
import commission7 from '../assets/commissions/commission7.JPG';
import commission8 from '../assets/commissions/commission8.JPG';
import commission9 from '../assets/commissions/commission9.JPG';
import commission10 from '../assets/commissions/commission10.JPG';
import commission11 from '../assets/commissions/commission11.JPG';
import commission12 from '../assets/commissions/commission12.JPG';
import commission13 from '../assets/commissions/commission13.JPG';
import commission14 from '../assets/commissions/commission14.png';
import commission15 from '../assets/commissions/commission15.PNG';
import commission16 from '../assets/commissions/commission16.JPG';

const Commissions = () => {
    const commissionImages = [
        {
            img: commission1,
            column: 1,
        },
        {
            img: commission2,
            column: 2,
        },
        {
            img: commission3,
            column: 3,
        },
        {
            img: commission4,
            column: 1,
        },
        {
            img: commission5,
            column: 2,
        },
        {
            img: commission6,
            column: 3,
        },
        {
            img: commission7,
            column: 1,
        },
        {
            img: commission8,
            column: 2,
        },
        {
            img: commission9,
            column: 3,
        },
        {
            img: commission10,
            column: 1,
        },
        {
            img: commission11,
            column: 2,
        },
        {
            img: commission12,
            column: 3,
        },
        {
            img: commission13,
            column: 1,
        },
        {
            img: commission14,
            column: 2,
        },
        {
            img: commission15,
            column: 3,
        },
        {
            img: commission16,
            column: 1,
        },
    ];
    return (


        <section className="wrapper fadeIn commissions">
            <h2>Commissions</h2>

            <p>I’m available for tattoo commissions, digital commissions, and originals. Please reach out and contact me for more information! </p>

            <div className="columnContainer">
                <div className="column">
                    {
                        commissionImages.map((item, index) => {
                            if (item.column === 1) {
                                console.log(index);
                                return (
                                    <ScrollAnimation animateIn="fadeIn" duration={1} offset={0} delay={1} key={`commission-${index}`}>
                                        <img src={item.img} alt="" />
                                    </ScrollAnimation>
                                )
                            }
                        })
                    }
                </div>

                <div className="column">
                    {
                        commissionImages.map((item, index) => {
                            if (item.column === 2) {
                                console.log(index);
                                return (
                                    <ScrollAnimation animateIn="fadeIn" duration={1} offset={0} delay={1} key={`commission-${index}`}>
                                        <img src={item.img} alt="" />
                                    </ScrollAnimation>
                                )
                            }
                        })
                    }
                </div>

                <div className="column">
                    {
                        commissionImages.map((item, index) => {
                            if (item.column === 3) {
                                return (
                                    <ScrollAnimation animateIn="fadeIn" duration={1} offset={0} delay={1} key={`commission-${index}`}>
                                        <img src={item.img} alt="" />
                                    </ScrollAnimation>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </section>
    )
};

export default Commissions;