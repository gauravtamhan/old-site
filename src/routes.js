import React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import HomeScene from 'pages/Home/HomeScene';
import ContactScene from 'pages/Contact/ContactScene';
import HouseATLScene from 'pages/HouseATL/HouseATLScene';

export default props => (
    <Router>
        <Switch>
            <Route exact path="/" component={HomeScene} />
            <Route exact path="/contact" component={ContactScene} />
            <Route exact path="/house-atl-data-collective" component={HouseATLScene} />
            {/* <Route component={NotFound} /> */}
        </Switch>
    </Router>
)