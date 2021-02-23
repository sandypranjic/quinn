import React, { useEffect, useState } from 'react';
import emailjs, { init } from 'emailjs-com';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        emailjs.init("user_R9Ae2V1rLzz946WjzLlLA");
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowError(false);
        setShowSuccess(false);

        const emailForm = document.getElementById('emailForm');

        emailjs.send('service_ti6hz0s', 'template_aaukp6n', {
            "from_name": name,
            "from_email": email,
            "message": msg,
        })
            .then(function(response) {
                setShowSuccess(true);
                emailForm.reset();
        }, function(error) {
            setShowError(true);
    });
    };

    return (
        <>
            <section className="wrapper fadeIn contact">
                <h2>Contact</h2>

                <p>
                    For commissions, questions, or to say hi, please email quinnrockliff@gmail.com or fill out the form below.
                </p>
                <form id="emailForm" onSubmit={(event) => { handleSubmit(event); }}>
                <label htmlFor="from_name">
                    Name
                    <input onChange={(event) => { setName(event.target.value); }} type="text" name="from_name" id="from_name"placeholder="Name" required />
                </label>

                <label htmlFor="from_email">
                    Email
                    <input onChange={(event) => { setEmail(event.target.value); }} type="text" id="from_email" name="from_email" placeholder="Email" required />
                </label>

                <label htmlFor="message" className="message">
                    Message
                    <textarea onChange={(event) => { setMsg(event.target.value); }} id="message" name="message" placeholder="Message" required />
                </label>
                <div className="buttonContainer">
                    <div className="emailSuccessContainer fadeIn">
                    {
                    showSuccess
                        ? <p className="emailSuccess fadeIn">Thanks for your email! I'll be in touch shortly.</p>
                        : null
                    }
                    {
                    showError
                        ? <p className="emailSuccess fadeIn">Oops, there was an error. Please try again.</p>
                        : null
                    }
                    </div>
                    <div>
                        <button type="submit">Send</button>
                    </div>
                </div>
            </form>
            </section>
        </>
    );
};

export default Contact;
