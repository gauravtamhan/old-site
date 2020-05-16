import React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
// import UseCustomCursor from 'components/UseCustomCursor';
import NotFoundScene from 'pages/Peripheral/NotFoundScene';
import HomeScene from 'pages/Home/HomeScene';
import ContactScene from 'pages/Contact/ContactScene';
import HouseATLScene from 'pages/HouseATL/HouseATLScene';
import FitspotScene from 'pages/Fitspot/FitspotScene';
import ScrollToTop from 'components/ScrollToTop';
import ComingSoonScene from 'pages/Peripheral/ComingSoonScene';

export default props => (
    <Router>
        {/* <UseCustomCursor /> */}
        <ScrollToTop />
        <Switch>
            <Route exact path="/" component={HomeScene} />
            <Route exact path="/contact" component={ContactScene} />
            <Route exact path="/houseATL" component={HouseATLScene} />
            <Route exact path="/fitspot" component={FitspotScene} />
            <Route exact path="/coming-soon" component={ComingSoonScene} />
            <Route component={NotFoundScene} />
        </Switch>
    </Router>
)