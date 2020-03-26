import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Section = (props) => {
    return (
        <div className="section">
            <ScrollAnimation animateIn="fadeIn">
                {props.children}
            </ScrollAnimation>
        </div>
    );
}

export default Section;
