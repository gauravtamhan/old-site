import React from 'react';
import Typography from 'components/Typography';

const Video = ({ label, src, margin }) => {
    return (
        <div className={`padding-sm ${margin ? 'marginBottom' : ''}`}>
            {label && (
                <Typography variant="block">{label}</Typography>
            )}
            <video autoPlay muted loop>
                <source src={src} type="video/mp4" />
            </video>
        </div>
    );
}

export default Video;
