import React, { useState } from 'react';
import { Fragment } from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//
import Stepper from './Stepper';
//
import PersonalDetails from '../../containers/PersonalDetails';
import Experiences from '../../containers/Experiences';
import Templates from '../../containers/Templates';
//
import '../styles/home.css';

// css
const useStyles = makeStyles((theme) => ({
    title: {
        display: 'flex',
        justifyContent: 'center',
        color: '#f7fff9'
    },
    formSection: {
        backgroundColor: '#FAF9F6',
        padding: '50px 20px 20px 10px',
        [theme.breakpoints.up('md')]: {
            padding: '50px 20px 20px 20px',
            border: '1px solid #c5c5c4',
            borderRadius: '5px',
            boxShadow: '5px 5px 8px #a5a5a5'
        }
    }
}));

const BuildResume = () => {
    const classes = useStyles();
    const [progress, setProgress] = useState(1);
    const steps = ['Personal details', 'My experiences', 'Select template'];
    //
    const [personalData, setPersonalData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        number: '',
        city: '',
        address: '',
        zipCode: ''
    });
    const [experienceData, setExperienceData] = useState({
        competencics: '',
        jobTitle: '',
        city: '',
        employer: '',
        startDate: '',
        endDate: '',
        internshipDescription: '',
        degree: '',
        school: '',
        eduCity: '',
        eduStartDate: '',
        eduEndDate: '',
        eduDescription: ''
    });

    //
    return (
        <Fragment>
            <div className="custom-shape-divider-top-1627030987">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                </svg>
            </div>
            <Container maxWidth="lg">
                <div className={classes.title}>
                    <Typography variant="h5">{steps[progress - 1]}</Typography>
                </div>
                <Stepper activeStep={progress - 1} />
            </Container>
            <Container maxWidth="md" className={classes.formSection}>
                {progress === 1 && <PersonalDetails initialFormData={personalData} setParentFormData={setPersonalData} setProgress={setProgress} />}
                {progress === 2 && <Experiences initialFormData={experienceData} setParentFormData={setExperienceData} setProgress={setProgress} />}
                {progress === 3 && <Templates personalData={personalData} experienceData={experienceData} setProgress={setProgress} />}
            </Container>
        </Fragment>
    );
};

export default BuildResume;
