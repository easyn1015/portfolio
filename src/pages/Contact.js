import React from 'react';

const Contact = () => {
    return (
        <section className='contact-wrap'>
            <a href='#' onClick={() => window.open('mailto:easyo1015@gmail.com')}>
                Contact Me ↗
            </a>
        </section>
    );
};

export default Contact;
