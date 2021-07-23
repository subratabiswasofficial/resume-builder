// main
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// ui
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

// externals
import { login } from '../../actions/auth';
import { Fragment } from 'react';

// css
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(5),
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
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

const Login = ({ isAuthenticated, login }) => {
    // utils
    const classes = useStyles();
    // states
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    // vatiables
    const { email, password } = formData;

    // handlers
    const onChangeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        login(email, password);
    };

    // excp
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
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={onSubmitHandler}>
                        <TextField variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus onChange={onChangeHandler} />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={onChangeHandler}
                        />
                        <Button type="submit" fullWidth variant="contained" color="default" className={classes.submit} disableElevation>
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="/signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </Fragment>
    );
};

const mapStateToProp = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProp, { login })(Login);
