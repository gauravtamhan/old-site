import React from 'react';
import Typography from 'components/Typography';

const LabelBlock = ({ label, block, link, tab, onClick }) => {
    return (
        link ? (
            <div className="label-block">
                <Typography variant="label">{label}</Typography>
                <a href={link} target={tab ? "_blank" : ''} onClick={onClick} className="underline-from-left">
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
