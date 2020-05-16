import React, { Component, Fragment } from 'react';
import Typography from 'components/Typography';
import LabelBlock from 'components/LabelBlock';
import Image from 'components/Image';
import Video from 'components/Video';
import Section from 'components/Section';
import ProjectFooter from 'components/ProjectFooter';

const pageTitle = 'Working at Fitspot';


class HouseATL extends Component {
    componentDidMount() {
        document.title = `Gaurav Tamhan - ${pageTitle}`;
    }

    render() {
        return (
            <Fragment>
                <Typography variant="title">
                    {pageTitle}
                </Typography>
                <div className="row">
                    <div className="col-md-6 col-lg-4 col-xl-3">
                        <LabelBlock label="Duration" block="1 year, 2 months" />
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                        <LabelBlock label="Role" block="Frontend developer" />
                    </div>
                </div>

                <Section>
                    <div className="row">
                        <div className="col-lg-10 col-xl-8">
                            <Typography variant="body">
                                In the summer of 2018 I started working at Fitspot, a fitness-focused company that promotes workplace wellness through on-site and digital programs. Through this experience, I was able to work alongside senior developers to build multiple client-facing products.
                            </Typography>
                        </div>
                    </div>
                    <Image src={require('./assets/hero.png')} />
                </Section>

                <Section>
                    <Typography variant="heading">
                        Growth & Development
                    </Typography>
                    <div className="row">
                        <div className="col-lg-10 col-xl-8">
                            <Typography variant="body">
                                Before starting at Fitspot, I had set a personal goal for myself to improve my abilities with frontend technologies, especially React, and gain a better understanding of the development process, from ideation to launch. Since this was a relatively young company, I got to take on multiple projects and learned to adapt quickly in a fast-paced environment. Below are a few of the projects I worked on.
                            </Typography>
                        </div>
                    </div>
                    <div style={{ padding: '2rem 0' }}>
                        <Typography variant="block" className="header">
                            UI Enhancements
                        </Typography>
                        <div className="row">
                            <div className="col-lg-10 col-xl-8">
                                <Typography variant="body">
                                    Replaced the traditional top navigation for the entire site with a responsive and easily configurable side navigation component. This component is now used throughout the entire suite of applications.
                                </Typography>
                            </div>
                        </div>
                        <Video margin src={require('./assets/side-menu.mp4')} />
                        <div className="row">
                            <div className="col-lg-10 col-xl-8">
                                <Typography variant="body">
                                    Upon client request, added a theme picker that allows users to personalize the look of their web portal. This feature was built using Sass mixins for generating the CSS and the browser’s localStorage API to save the user’s theme preference.
                                </Typography>
                            </div>
                        </div>
                        <Video margin src={require('./assets/theme.mp4')} />

                        <Typography variant="block" className="header">
                            New Features
                         </Typography>
                        <div className="row">
                            <div className="col-lg-10 col-xl-8">
                                <Typography variant="body">
                                    As a way to show little snippets of information in a fun and engaging way, I introduced informational tiles into the core web portal. These tiles display information in the form of images, text, links, and/or videos and utilize CSS animations to smoothly animate through the different content.
                                </Typography>
                                <Typography variant="body">
                                    In addition to the user-facing side, I built a tile editor into the content management tool. This allows for both managing existing tiles and easily building and deploying new tiles.
                                </Typography>
                            </div>
                        </div>
                        <Video margin src={require('./assets/tiles.mp4')} />

                        <Typography variant="block" className="header">
                            Building a New App
                         </Typography>
                        <div className="row">
                            <div className="col-lg-10 col-xl-8">
                                <Typography variant="body">
                                    I was tasked with taking the existing React Native mobile app and rebuilding it from scratch as a progressive web app (PWA). This allowed the product to be accessible from the desktop as a web app, and installed as a standalone app on mobile.
                                </Typography>
                                <Typography variant="body">
                                    The rationale behind this project was primarily so that the codebase would no longer be fragmented between React Native and React web which meant faster updates and better integration with the continuous deployment system. Additionally, this was an opportunity to improve both the UX of the app, as well as improve upon the code to reduce its bundle size and increase maintainability.
                                </Typography>
                                <Typography variant="body">
                                    This was by far my favorite project to work on as it was the most challenging, but also provided a great opportunity to hone my technical and design skills.
                                </Typography>
                            </div>
                        </div>
                        <Video src={require('./assets/trainer-app.mp4')} />
                    </div>
                </Section>



                <Section>
                    <Typography variant="heading">
                        Looking Back
                    </Typography>
                    <div className="row">
                        <div className="col-lg-10 col-xl-8">
                            <Typography variant="body">
                                My experience at Fitspot was a great stepping stone into the role of a frontend developer. During my time here I had great exposure to the full ideation and creation process, as well as the opportunity to learn and practice new development technologies and concepts. I learned a ton about React, Redux, Webpack, Sass, Git, application security, and much more.
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
