import React from 'react';
import Typography from 'components/Typography';

const Image = ({ label, src }) => {
    return (
        <div className="padding-sm">
            {label && (
                <Typography variant="block">{label}</Typography>
            )}
            <img className="g-img" src={src} alt="" />
        </div>
    );
}

export default Image;
