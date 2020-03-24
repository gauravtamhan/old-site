import React from 'react';

const Main = (props) => {
    return (
        <div className="container main">
            {props.children}
        </div>
    );
}

export default Main;
