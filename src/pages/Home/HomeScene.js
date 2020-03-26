import React from 'react';
import Navbar from 'components/Navbar';
import Main from 'components/Main';
import Home from 'pages/Home';

const HomeScene = () => {
    return (
        <Main>
            <Navbar />
            <Home title="Gaurav Tamhan - Front End Developer" />
        </Main>
    );
}

export default HomeScene;
