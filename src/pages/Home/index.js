import React, { Component, Fragment } from 'react';
import Typography from 'components/Typography';
import { Link } from 'react-router-dom';
import { projects } from 'shared/consts';

class Home extends Component {
    componentDidMount() {
        document.title = this.props.title;
    }

    render() {
        return (
            <Fragment>
                <div className="padding-sm">
                    <Typography variant="title">I'm Gaurav,</Typography>
                    <Typography variant="title">
                        A frontend dev with a passion for UX.
                    </Typography>
                </div>

                {projects.map((item, index) => (
                    <div key={index} className="row">
                        <div className="col-md-10 col-lg-8 col-xl-7 works">
                            <Typography variant="subtitle">
                                {(index + 1).toLocaleString('en-US', {
                                    minimumIntegerDigits: 2,
                                })}
                            </Typography>
                            <Link
                                to={item.location}
                                className="underline-from-left"
                            >
                                <Typography variant="title-2">
                                    {item.label}
                                </Typography>
                            </Link>
                        </div>
                    </div>
                ))}
            </Fragment>
        );
    }
}

export default Home;
