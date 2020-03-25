import React, { Fragment } from 'react';
import Typography from 'components/Typography';
import TextBlock from 'components/TextBlock';


const HouseATL = () => {

    return (
        <Fragment>
            <Typography variant="title">
                House ATL Data Collective
            </Typography>
            <TextBlock body="The House ATL Data Collective is a collaborative initiative to build a unified database of subsidized affordable housing in the metro Atlanta area. As part of my Graduate Research Assistantship through Georgia Tech, I had the opportunity to work on this project and build the public-facing web portal that organizes and visualizes the data." />
            <img src={require('./imgs/img1.png')} width='100%' alt="" />
        </Fragment>
    );
}

export default HouseATL;
