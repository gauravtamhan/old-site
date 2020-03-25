import React from 'react';
import Navbar from 'components/Navbar';
import Main from 'components/Main';
import Contact from 'pages/Contact';

const ContactScene = () => {
    return (
        <Main>
            <Navbar />
            <Contact />
        </Main>
    );
}

export default ContactScene;
