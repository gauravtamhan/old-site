import React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import NotFoundScene from 'pages/NotFound/NotFoundScene';
import HomeScene from 'pages/Home/HomeScene';
import ContactScene from 'pages/Contact/ContactScene';
import HouseATLScene from 'pages/HouseATL/HouseATLScene';
import ScrollToTop from 'components/ScrollToTop';

export default props => (
    <Router>
        <ScrollToTop />
        <Switch>
            <Route exact path="/" component={HomeScene} />
            <Route exact path="/contact" component={ContactScene} />
            <Route exact path="/house-atl-data-collective" component={HouseATLScene} />
            <Route component={NotFoundScene} />
        </Switch>
    </Router>
)