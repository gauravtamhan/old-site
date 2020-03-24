import React, { Fragment } from 'react';
import Typography from 'components/Typography';
import LabelBlock from 'components/LabelBlock';

const Contact = () => {

    const email = 'gaurav.tamhan@gmail.com';
    const github = 'https://github.com/gauravtamhan';
    const linkedin = 'https://www.linkedin.com/in/gauravtamhan/';

    return (
        <Fragment>
            <div>
                <Typography variant="title">Get in touch.</Typography>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <LabelBlock label="E-mail" block={email} link={`mailto:${email}`} />
                </div>
                <div className="col-md-4">
                    <LabelBlock label="Github" block="gauravtamhan" link={github} tab />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <LabelBlock label="LinkedIn" block="in/gauravtamhan" link={linkedin} tab />
                </div>
                <div className="col-md-4">
                    <LabelBlock label="Resume" block="click to view" link={require('assets/resume/gaurav_tamhan_resume_2020.pdf')} tab />
                </div>
            </div>
        </Fragment>
    );
}

export default Contact;
