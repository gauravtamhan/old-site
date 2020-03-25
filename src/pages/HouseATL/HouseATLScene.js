import React from 'react';
import Navbar from 'components/Navbar';
import Main from 'components/Main';
import HouseATL from 'pages/HouseATL';

const HouseATLScene = () => {
    return (
        <Main>
            <Navbar back />
            <HouseATL />
        </Main>
    );
}

export default HouseATLScene;
