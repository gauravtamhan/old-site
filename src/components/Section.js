import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Section = ({ noAnimation, adjustPadding, children }) => {
    return (
        noAnimation ? (
            <div className={`section ${adjustPadding ? 'adjust-padding' : ''}`}>
                {children}
            </div >
        ) : (
            <div className={`section ${adjustPadding ? 'adjust-padding' : ''}`}>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    {children}
                </ScrollAnimation >
            </div >
        )
    );
}

export default Section;
