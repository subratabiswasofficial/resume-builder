import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { Typography } from '@material-ui/core';
//
import Check from '@material-ui/icons/Check';
import StepConnector from '@material-ui/core/StepConnector';
//
import PersonIcon from '@material-ui/icons/Person';
import DescriptionIcon from '@material-ui/icons/Description';
import CreateIcon from '@material-ui/icons/Create';

const useQontoStepIconStyles = makeStyles({
    root: {
        color: '#eaeaf0',
        display: 'flex',
        height: 22,
        alignItems: 'center'
    },
    active: {
        color: '#784af4'
    },
    circle: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor'
    },
    completed: {
        color: '#784af4',
        zIndex: 1,
        fontSize: 18
    }
});

function QontoStepIcon(props) {
    const classes = useQontoStepIconStyles();
    const { active, completed } = props;

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active
            })}
        >
            {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
        </div>
    );
}

QontoStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool
};

const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 22
    },
    active: {
        '& $line': {
            backgroundColor: '#6a60e5'
        }
    },
    completed: {
        '& $line': {
            backgroundColor: '#6a60e5'
        }
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1
    }
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    active: {
        backgroundColor: '#6a60e5'
    },
    completed: {
        backgroundColor: '#6a60e5'
    }
});

function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
        1: <PersonIcon />,
        2: <DescriptionIcon />,
        3: <CreateIcon />
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
    button: {
        marginRight: theme.spacing(1)
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    }
}));

function getSteps() {
    return ['Personal', 'Experiences', 'Template'];
}

export default function CustomizedSteppers({ activeStep = 0 }) {
    const classes = useStyles();
    // const [activeStep, setActiveStep] = React.useState(1);
    const steps = getSteps();

    return (
        <div className={classes.root}>
            <Stepper alternativeLabel activeStep={activeStep} style={{ backgroundColor: 'transparent' }} connector={<ColorlibConnector />}>
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>
                            {
                                <Typography style={{ color: '#f7fff9', fontWeight: index === activeStep ? '450' : '400' }} variant="body1">
                                    {label}
                                </Typography>
                            }
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
}
