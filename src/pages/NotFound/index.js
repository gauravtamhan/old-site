import React, { Component } from 'react';
import Typography from 'components/Typography';
import Button from 'components/Button';

class Contact extends Component {
    componentDidMount() {
        document.title = this.props.title;
    }

    render() {
        return (
            <div>
                <div className="spacer" />
                <div className="row">
                    <div className="col-md-10 col-lg-7">
                        <Typography variant="title-2">Uh oh!</Typography>
                        <Typography variant="body">Looks like the page you were looking for doesn’t exist. Try going back or using the links at the top to navigate to another page.</Typography>
                        <div style={{ paddingTop: '1rem' }}>
                            <Button onClick={() => { window.history.back() }}>Go Back</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
