import React, { Fragment } from 'react';
import Typography from 'components/Typography';

const TextBlock = ({ heading, body }) => {
    return (
        <Fragment>
            {heading && (
                <Typography variant="heading">
                    {heading}
                </Typography>
            )}
            <div className="row">
                <div className="col-7">
                    <Typography variant="body">
                        {body}
                    </Typography>
                </div>
            </div>
        </Fragment>
    );
}

export default TextBlock;
