import React from 'react';
import Navbar from 'components/Navbar';
import Main from 'components/Main';
import Home from 'pages/Home/Home';

const HomeScene = () => {
    return (
        <Main>
            <Navbar />
            <Home />
        </Main>
    );
}

export default HomeScene;
