import React, { Component } from 'react';
import Typography from 'components/Typography';
import Button from 'components/Button';

class Peripheral extends Component {
    componentDidMount() {
        document.title = this.props.title;
    }

    render() {
        const { header, body, noCTA } = this.props;

        return (
            <div>
                <div className="spacer" />
                <div className="row">
                    <div className="col-md-10 col-lg-7">
                        <Typography variant="title-2">{header}</Typography>
                        <Typography variant="body">{body}</Typography>
                        {!noCTA && (
                            <div style={{ paddingTop: '1rem' }}>
                                <Button onClick={() => { window.history.back() }}>Go Back</Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Peripheral;
