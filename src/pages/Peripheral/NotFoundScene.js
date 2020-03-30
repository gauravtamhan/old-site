import React from 'react';
import Navbar from 'components/Navbar';
import Main from 'components/Main';
import Peripheral from 'pages/Peripheral';

const NotFoundScene = () => {
    return (
        <Main>
            <Navbar />
            <Peripheral
                title="Gaurav Tamhan - Front End Developer"
                header="Uh oh!"
                body="Looks like the page you were looking for doesn’t exist. Try going back or using the links at the top to navigate to another page."
            />
        </Main>
    );
}

export default NotFoundScene;
