import React, { Fragment } from 'react';
import Navbar from 'components/Navbar';
import Main from 'components/Main';
import HouseATL from 'pages/HouseATL';
import ProgressBar from 'components/ProgressBar';

const HouseATLScene = () => {
    return (
        <Fragment>
            <ProgressBar />
            <Main>
                <Navbar back />
                <HouseATL />
            </Main>
        </Fragment>
    );
}

export default HouseATLScene;
