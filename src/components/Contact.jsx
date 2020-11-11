import React, { useEffect, useState } from 'react';

const Contact = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <section className="wrapper fadeIn contact">
            <h2>Contact</h2>

            <p>
                For commissions, questions, or to say hi, please email quinnrockliff@gmail.com or fill out the form below.
            </p>

            <form onSubmit={(event) => { handleSubmit(event); }}>
                <label htmlFor="name">
                    Name
                    <input type="text" id="name" name="name" placeholder="Name" />
                </label>

                <label htmlFor="email">
                    Email
                    <input type="text" id="email" name="email" placeholder="Email" />
                </label>

                <label htmlFor="message" className="message">
                    Message
                    <textarea id="message" placeholder="Message" />
                </label>

                <button type="submit">Send</button>
            </form>
        </section>
    );
};

export default Contact;
