import React from 'react';

const Button = ({ link, onClick, children }) => {
    return (
        <a className="g-btn" href={link} onClick={onClick} target="_blank" rel="noopener noreferrer">{children}</a>
    );
}

export default Button;
