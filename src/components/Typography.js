import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Typography = ({ variant, children }) => {
    return (
        <Fragment>
            {variant === 'title' && (
                <h1 className={variant}>{children}</h1>
            )}
            {(variant === 'body' || variant === 'label' || variant === 'block') && (
                <p className={variant}>{children}</p>
            )}
        </Fragment>
    );
}

Typography.propTypes = {
    variant: PropTypes.oneOf(['title', 'title2', 'subtitle', 'heading', 'body', 'label', 'block'])
};

export default Typography;