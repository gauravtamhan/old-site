import React, { Component, Fragment } from 'react';
import Typography from 'components/Typography';
import Button from 'components/Button';
import LabelBlock from 'components/LabelBlock';
import Image from 'components/Image';
import Section from 'components/Section';
import ProjectFooter from 'components/ProjectFooter';

const pageTitle = 'House ATL Data Collective';

const liveLink = 'http://geospatial.gatech.edu/HOUSEATL/#/';

const tasks = [
    'Understanding geospatial layout of the data',
    'Observing data clusters in relation to other geographic and zoning indicators',
    'Filtering and sorting the data by key metrics to observe trends',
    'Viewing a snapshot of how much data is being contributed by different agencies',
    'Uploading additional data sets based on newly established guidelines',
];

class HouseATL extends Component {
    componentDidMount() {
        document.title = `Gaurav Tamhan | ${pageTitle}`;
    }

    render() {
        return (
            <Fragment>
                <Typography variant="title">
                    {pageTitle}
                </Typography>
                <div className="row">
                    <div className="col-md-6 col-lg-4 col-xl-3">
                        <LabelBlock label="When" block="Fall 2019, 4 months" />
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                        <LabelBlock label="Role" block="Front-end developer" />
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                        <LabelBlock label="Client" block="House ATL" />
                    </div>
                </div>

                <Section>
                    <div className="row">
                        <div className="col-lg-10 col-xl-8">
                            <Typography variant="body">
                                The House ATL Data Collective is a collaborative initiative to build a unified database of subsidized affordable housing in the metro Atlanta area. As part of my Graduate Research Assistantship through Georgia Tech, I had the opportunity to work on this project and build the public-facing web portal that organizes and visualizes the data.
                            </Typography>
                        </div>
                    </div>
                    <div className="padding-sm">
                        <Button link={liveLink}>View Live</Button>
                    </div>
                    <Image src={require('./imgs/image-1.png')} />
                </Section>

                <Section>
                    <Typography variant="heading">
                        Project Purposes & Goals
                    </Typography>
                    <div className="row">
                        <div className="col-lg-10 col-xl-8">
                            <Typography variant="body">
                                The goal of the web portal was to create a platform that allows civic leaders and housing agencies to gain an overview of the state of subsidized housing as well as update, retrieve, and manipulate the data to observe patterns and make informed decisions.
                            </Typography>

                            <Typography variant="body" className="list-header">
                                Some of the tasks include:
                            </Typography>
                            <ul>
                                {tasks.map((item, index) => (
                                    <li key={index}>
                                        <Typography variant="body">
                                            {item}
                                        </Typography>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                </Section>

                <Section>
                    <Image src={require('./imgs/image-2.png')} label="Income Breakdown" />
                    <Image src={require('./imgs/image-3.png')} label="Aggregate Data Charts" />
                </Section>

                <Section>
                    <Typography variant="heading">
                        Web Stack Explanation
                    </Typography>
                    <div className="row">
                        <div className="col-lg-10 col-xl-8">
                            <Typography variant="body">
                                React made the most sense for a state-driven application like this. Its component-based nature and reactive updates to state changes made updating and maintaining the code base much easier.
                            </Typography>
                            <Typography variant="body">
                                Using Redux allowed for not having to pass state through components and instead maintaining an overall application state. Additionally, the integration of middleware like Redux Thunk allowed for managing state changes asynchronously during API calls.
                            </Typography>
                            <Typography variant="body">
                                Additional libraries used include D3.js for building and dynamically updating charts in the snapshot view, as well as Material-UI for providing Material Design styled UI elements.
                            </Typography>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 col-sm-6 col-md-3">
                            <Image src={require('./imgs/React.png')} />
                        </div>
                        <div className="col-6 col-sm-6 col-md-3">
                            <Image src={require('./imgs/Redux.png')} />
                        </div>
                        <div className="col-6 col-sm-6 col-md-3">
                            <Image src={require('./imgs/MUI.png')} />
                        </div>
                        <div className="col-6 col-sm-6 col-md-3">
                            <Image src={require('./imgs/D3.png')} />
                        </div>
                    </div>
                </Section>

                <Section>
                    <Typography variant="heading">
                        Lessons Learned
                    </Typography>
                    <div className="row">
                        <div className="col-lg-10 col-xl-8">
                            <Typography variant="body">
                                For this project I got to work closely with stakeholders, the lead designer, and the backend team to bring this product to life. Along the way, I learned how to collaboratively solve problems and the importance of having open communication with other teams to meet requirements on time.
                            </Typography>
                            <Typography variant="body">
                                This project also provided a great opportunity to hone my skills building a larger scale application from scratch. I learned how to adapt quickly to requirement changes by organizing and writing more modular code. This helped soften the impact of making big architectural or user-flow related changes during the development process, and ultimately cut down on development time.
                            </Typography>
                        </div>
                    </div>
                </Section>

                <ProjectFooter />

            </Fragment>
        );
    }
}

export default HouseATL;
