// main
import React, { useState, Fragment, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// ui
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// externals
import { register } from '../../actions/auth';
import { setAlert } from '../../actions/alert';

// css
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    containerBox: {
        backgroundColor: '#FAF9F6',
        padding: '5px 20px 20px 20px',
        [theme.breakpoints.up('md')]: {
            padding: '0 30px 40px 30px',
            border: '1px solid #c5c5c4',
            borderRadius: '5px',
            boxShadow: '5px 5px 8px #a5a5a5'
        }
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

const Register = ({ isAuthenticated, setAlert, register }) => {
    // utils
    const classes = useStyles();

    // states
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        password: ''
    });

    // variables
    const { name, number, email, password } = formData;

    // handlers
    const onChangeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const newUser = {
            name,
            number,
            email,
            password
        };
        register(newUser);
    };

    // auth
    if (isAuthenticated) {
        return <Redirect to="/" />;
    }

    return (
        <Fragment>
            <div className="custom-shape-divider-top-1627030987">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                </svg>
            </div>
            <Container maxWidth="xs" className={classes.containerBox}>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={onSubmitHandler}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField autoComplete="fname" name="name" variant="outlined" required fullWidth id="fullName" label="Full Name" autoFocus onChange={onChangeHandler} />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField autoComplete="fname" name="number" variant="outlined" fullWidth id="number" label="Phone Number" autoFocus onChange={onChangeHandler} />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField variant="outlined" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" onChange={onChangeHandler} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={onChangeHandler}
                                />
                            </Grid>
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" color="default" className={classes.submit} disableElevation>
                            Sign Up
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="/signin" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </Fragment>
    );
};

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProp = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProp, {
    setAlert,
    register
})(Register);
