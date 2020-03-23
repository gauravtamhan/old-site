import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Contact from 'pages/Contact'

export default props => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            {/* <Route component={NotFound} /> */}
        </Switch>
    </Router>
)