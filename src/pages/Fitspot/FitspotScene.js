import React, { Fragment } from 'react';
import Navbar from 'components/Navbar';
import Main from 'components/Main';
import Fitspot from 'pages/Fitspot';
import ProgressBar from 'components/ProgressBar';

const FitspotScene = () => {
    return (
        <Fragment>
            <ProgressBar />
            <Main>
                <Navbar back />
                <Fitspot />
            </Main>
        </Fragment>
    );
}

export default FitspotScene;
