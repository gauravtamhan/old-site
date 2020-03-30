import React from 'react';
import Typography from 'components/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { social } from 'shared/consts';

const { email, github, linkedin } = social;

const data = [
    {
        icon: faGithub,
        link: github,
    },
    {
        icon: faLinkedin,
        link: linkedin,
    },
    {
        icon: faEnvelope,
        link: email,
    },
]

const Footer = () => {
    return (
        <div className="footer">
            <div style={{ height: 1, backgroundColor: '#70757A', marginBottom: 25 }} />
            <div className="row align-items-center">
                <div className="col-md-6 d-flex justify-content-center justify-content-md-start">
                    <div className="footer-padding">
                        <Typography variant="label">Gaurav Tamhan &#x24B8; 2020</Typography>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
                    <div className="social-icons footer-padding">
                        {data.map(({ icon, link }) => (
                            <a key={link} href={link} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={icon} size="lg" fixedWidth />
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;
