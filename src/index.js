import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.scss';
import Routes from './routes';
import ReactGA from 'react-ga';
import smoothscroll from 'smoothscroll-polyfill';
import * as serviceWorker from './serviceWorker';

class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            initialized: false,
        };
    }

    componentDidMount() {
        // ReactGA.initialize(process.env.REACT_APP_GA_TRACKER_ID)
        this.setState({ initialized: true });
    }

    render() {
        const { initialized } = this.state;

        return initialized && <Routes />;
    }
}

// kick off the polyfill!
smoothscroll.polyfill();

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
