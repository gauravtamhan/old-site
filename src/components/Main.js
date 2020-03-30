import React from 'react';
import Footer from 'components/Footer';

const Main = (props) => {
    return (
        <div className="container main">
            <div className="page-content">
                {props.children}
            </div>
            <Footer />
        </div>
    );
}

export default Main;
