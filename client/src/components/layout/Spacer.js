// main
import React from 'react';

// ui
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '56px',
        [theme.breakpoints.up('599')]: {
            height: '64px'
        }
    }
}));

const Spacer = () => {
    const classes = useStyles();
    return <div className={classes.root}></div>;
};
export default Spacer;
