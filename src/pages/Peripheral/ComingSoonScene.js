import React from 'react';
import Navbar from 'components/Navbar';
import Main from 'components/Main';
import Peripheral from 'pages/Peripheral';

const ComingSoonScene = () => {
    return (
        <Main>
            <Navbar back />
            <Peripheral
                title="Gaurav Tamhan - Front End Developer"
                header="Coming soon..."
                body="This page is currently under construction. In the meantime, head back to check out some of the other works."
                noCTA
            />
        </Main>
    );
}

export default ComingSoonScene;
