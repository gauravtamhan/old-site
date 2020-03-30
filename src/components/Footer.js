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
                <div className="col-8 d-flex justify-content-start">
                    <div className="footer-padding">
                        <Typography variant="label">&#x24B8; 2020 Gaurav Tamhan</Typography>
                    </div>
                </div>
                <div className="col-4 d-flex justify-content-end">
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
