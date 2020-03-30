import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.scss';
import Routes from './routes'
import smoothscroll from 'smoothscroll-polyfill';
import * as serviceWorker from './serviceWorker';

// kick off the polyfill!
smoothscroll.polyfill();

ReactDOM.render(<React.StrictMode><Routes /></React.StrictMode>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
