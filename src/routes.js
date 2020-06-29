import React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';
import { projects } from 'shared/consts';
// import UseCustomCursor from 'components/UseCustomCursor';
import NotFoundScene from 'pages/Peripheral/NotFoundScene';
import HomeScene from 'pages/Home/HomeScene';
import ContactScene from 'pages/Contact/ContactScene';
import HouseATLScene from 'pages/HouseATL/HouseATLScene';
import FitspotScene from 'pages/Fitspot/FitspotScene';
import ScrollToTop from 'components/ScrollToTop';
import ComingSoonScene from 'pages/Peripheral/ComingSoonScene';

function withTracker(WrappedComponent, options = {}) {
    const trackPage = page => {
        ReactGA.set({
            page,
            ...options,
        });
        ReactGA.pageview(page);
    };

    const HOC = class extends React.Component {
        componentDidMount() {
            const page = this.props.location.pathname;
            trackPage(page);
        }

        componentDidUpdate(prevProps) {
            const currentPage = this.props.location.pathname;
            const prevPage = prevProps.location.pathname;

            if (currentPage !== prevPage) {
                trackPage(currentPage);
            }
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };

    return HOC;
}

export default props => (
    <Router>
        {/* <UseCustomCursor /> */}
        <ScrollToTop />
        <Switch>
            <Route exact path="/" component={HomeScene} />
            <Route exact path="/contact" component={ContactScene} />
            <Route
                exact
                path={projects[0].location}
                component={HouseATLScene}
            />
            <Route exact path={projects[1].location} component={FitspotScene} />
            <Route
                exact
                path={projects[2].location}
                component={ComingSoonScene}
            />
            <Route
                exact
                path={projects[3].location}
                component={ComingSoonScene}
            />
            <Route
                exact
                path={projects[4].location}
                component={ComingSoonScene}
            />
            <Route component={NotFoundScene} />
        </Switch>
    </Router>
);
