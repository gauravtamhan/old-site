import React from 'react';
import Navbar from 'components/Navbar';
import Main from 'components/Main';
import NotFound from 'pages/NotFound';

const NotFoundScene = () => {
    return (
        <Main>
            <Navbar />
            <NotFound title="Gaurav Tamhan - Front End Developer" />
        </Main>
    );
}

export default NotFoundScene;
