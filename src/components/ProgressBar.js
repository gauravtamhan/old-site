import React, { Component } from 'react';


class ProgressBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollPostion: 0
        }
    }

    componentDidMount() {
        // this.listenToScrollEvent();
        document.addEventListener('scroll', this.listenToScrollEvent)
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.listenToScrollEvent);
    }

    listenToScrollEvent = () => {
        requestAnimationFrame(() => {
            this.calculateScrollDistance();
        });
    }

    calculateScrollDistance = () => {
        const scrollTop = window.pageYOffset; // how much the user has scrolled by
        const winHeight = window.innerHeight;
        const docHeight = this.getDocHeight();

        const totalDocScrollLength = docHeight - winHeight;
        const scrollPostion = scrollTop / totalDocScrollLength * 100

        this.setState({
            scrollPostion,
        });
    }

    getDocHeight = () => {
        return Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
    }



    render() {
        const { scrollPostion } = this.state;

        return (
            <div style={{
                position: 'fixed',
                background: `linear-gradient(
                    to right,
                    rgba(39, 110, 241, 1) ${ scrollPostion }%,
                    transparent  0)`,
                width: '100%',
                height: 6,
                zIndex: '3',
            }}>

            </div>
        );
    }
}

export default ProgressBar;