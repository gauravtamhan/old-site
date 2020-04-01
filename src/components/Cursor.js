import React, { Component } from 'react';

const normal = 'translate(-50%, -50%) scale(1)';
const small = 'translate(-50%, -50%) scale(0.75)';

class Cursor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cursorEnlarged: false,
            size: normal,
            left: (window.innerWidth / 2),
            top: (window.innerHeight / 2),
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.shrinkCursorSize);
        document.addEventListener('mouseup', this.resetCursorSize);
        document.addEventListener('mousemove', this.moveCursor);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.shrinkCursorSize);
        document.removeEventListener('mouseup', this.resetCursorSize);
        document.removeEventListener('mousemove', this.moveCursor);
    }

    toggleCursorSize = () => {
        const { cursorEnlarged } = this.state;

        this.setState({
            size: cursorEnlarged ? small : normal
        })
    }

    moveCursor = (e) => {
        this.setState({
            left: e.clientX,
            top: e.clientY,
        })
    }

    shrinkCursorSize = () => {
        this.setState({ cursorEnlarged: true })
        this.toggleCursorSize();
    }

    resetCursorSize = () => {
        this.setState({ cursorEnlarged: false })
        this.toggleCursorSize();
    }

    render() {
        const { size, top, left } = this.state;

        return (
            <div style={{ top, left, transform: size }} className="cursor-dot" />
        );
    }

}

export default Cursor;
