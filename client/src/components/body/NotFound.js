import React, { Fragment } from 'react';
// utils
import { Container, Typography } from '@material-ui/core';

const NotFound = () => {
    return (
        <Fragment>
            <div className="custom-shape-divider-top-1627030987">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                </svg>
            </div>
            <Container maxWidth="lg" style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', color: 'whitesmoke' }}>
                <Typography variant="h4" component="h4">
                    404 Not Found
                </Typography>
            </Container>
        </Fragment>
    );
};

export default NotFound;
