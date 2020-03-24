import React from 'react';
import Typography from 'components/Typography';

const LabelBlock = ({ label, block, link, tab }) => {
    return (
        link ? (
            <div className="label-block">
                <Typography variant="label">{label}</Typography>
                <a href={link} target={tab ? "_blank" : ''}>
                    <Typography variant="block">{block}</Typography>
                </a>
            </div>
        ) : (
            <div className="label-block">
                <Typography variant="label">{ label }</Typography>
                <Typography variant="block">{ block }</Typography>
            </div>
        )
    );
}

export default LabelBlock;
