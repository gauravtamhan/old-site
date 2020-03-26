import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Typography = ({ variant, children, className }) => {
    return (
        <Fragment>
            {variant === 'title' && (
                <h1 className={variant}>{children}</h1>
            )}
            {variant === 'title-2' && (
                <h2 className={variant}>{children}</h2>
            )}
            {variant === 'heading' && (
                <h3 className={variant}>{children}</h3>
            )}
            {variant === 'subtitle' && (
                <h5 className={variant}>{children}</h5>
            )}
            {(variant === 'body' || variant === 'label' || variant === 'block') && (
                <p className={`${variant} ${className || ''}`}>{children}</p>
            )}
        </Fragment>
    );
}

Typography.propTypes = {
    variant: PropTypes.oneOf(['title', 'title-2', 'subtitle', 'heading', 'body', 'label', 'block'])
};

export default Typography;