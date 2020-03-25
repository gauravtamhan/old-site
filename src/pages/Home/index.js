import React, { Fragment } from 'react';
import Typography from 'components/Typography';
import { Link } from 'react-router-dom'

const Home = () => {

    const links = [
        {
            label: 'House ATL Data Collective',
            location: '/house-atl-data-collective',
        },
        {
            label: 'Fitspot Wellness',
            location: '/contact',
        },
        {
            label: 'Site Redesign',
            location: '/contact',
        },
        {
            label: 'React Native App',
            location: '/contact',
        },
    ]
    return (
        <Fragment>
            <div style={{ marginBottom: 150 }}>
                <Typography variant="title">
                    Hello, my name is Gaurav.
                </Typography>
                <Typography variant="title">
                    I’m a front end developer and UX engineer.
                </Typography>
            </div>

            {links.map((item, index) => (
                <div key={index} className="row">
                    <div className="col-md-10 col-lg-7 works">
                        <Typography variant="subtitle">
                            {(index + 1).toLocaleString('en-US', { minimumIntegerDigits: 2 })}
                        </Typography>
                        <Link to={item.location}>
                            <Typography variant="title2">
                                {item.label}
                            </Typography>
                        </Link>
                    </div>
                </div>
            ))}

        </Fragment>
    );
}

export default Home;
