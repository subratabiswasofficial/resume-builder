import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { Container, Typography } from '@material-ui/core';

import '../styles/body/home.css';

const Home = () => {
    return (
        <Fragment>
            <div className="custom-shape-divider-top-1627030987">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                </svg>
            </div>
            <Container maxWidth="lg"></Container>
        </Fragment>
    );
};

export default Home;
