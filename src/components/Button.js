import React from 'react';

const Button = ({ link, children }) => {
    return (
        <a className="g-btn" href={link} target="_blank" rel="noopener noreferrer">{children}</a>
    );
}

export default Button;
