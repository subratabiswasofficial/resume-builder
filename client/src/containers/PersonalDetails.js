import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
}));

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

export default function CenteredGrid({ setProgress, initialFormData, setParentFormData }) {
    const classes = useStyles();
    const [formData, setFormData] = useState(initialFormData);
    const [formError_firstName, set_formError_firstName] = useState(true);
    const [formError_lastName, set_formError_lastName] = useState(true);
    const [formError_email, set_formError_email] = useState(true);

    const onChangeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const varify = () => {
        let fname = false,
            lname = false,
            email = false;
        if (formData.firstName?.length === 0) {
            fname = true;
            set_formError_firstName(true);
        } else {
            set_formError_firstName(false);
        }
        if (formData.lastName?.length === 0) {
            lname = true;
            set_formError_lastName(true);
        } else {
            set_formError_lastName(false);
        }
        if (!validateEmail(formData.email)) {
            email = true;
            set_formError_email(true);
        } else {
            set_formError_email(false);
        }

        if (!email && !fname && !lname) {
            setProgress(2);
        }
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {/* <Grid item xs={12} md={3} xl={3}>
                    <Paper className={classes.paper}>xs=12</Paper>
                </Grid> */}

                <Grid item xs={12} md={12} xl={12}>
                    <Grid item xs={12}>
                        <TextField
                            // id="outlined-full-width"
                            onChange={onChangeHandler}
                            value={formData.firstName}
                            error={formError_firstName}
                            name="firstName"
                            label="First Name"
                            style={{ margin: 8 }}
                            placeholder="First Name"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true
                            }}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            // id="outlined-full-width"
                            onChange={onChangeHandler}
                            value={formData.lastName}
                            error={formError_lastName}
                            label="Last Name"
                            name="lastName"
                            style={{ margin: 8 }}
                            placeholder="Last Name"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true
                            }}
                            variant="outlined"
                        />
                    </Grid>
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        // id="outlined-full-width"
                        onChange={onChangeHandler}
                        value={formData.email}
                        error={formError_email}
                        name="email"
                        label="Email"
                        style={{ margin: 8 }}
                        placeholder="Email"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true
                        }}
                        variant="outlined"
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        // id="outlined-full-width"
                        onChange={onChangeHandler}
                        value={formData.number}
                        type="number"
                        name="number"
                        label="Phone number"
                        style={{ margin: 8 }}
                        placeholder="Phone number"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true
                        }}
                        variant="outlined"
                    />
                </Grid>
                <Grid item md={12} xs={12}>
                    <TextField
                        // id="outlined-full-width"
                        onChange={onChangeHandler}
                        value={formData.address}
                        name="address"
                        label="Address"
                        style={{ margin: 8 }}
                        placeholder="Address"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true
                        }}
                        variant="outlined"
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        // id="outlined-full-width"
                        onChange={onChangeHandler}
                        value={formData.zipCode}
                        type="number"
                        name="zipCode"
                        label="Zip Code"
                        style={{ margin: 8 }}
                        placeholder="Zip code"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true
                        }}
                        variant="outlined"
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        // id="outlined-full-width"
                        onChange={onChangeHandler}
                        value={formData.city}
                        name="city"
                        label="City/Town"
                        style={{ margin: 8 }}
                        placeholder="City/Town"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true
                        }}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} /*md={6}*/>
                    <Button
                        variant="outlined"
                        fullWidth
                        color="primary"
                        disableElevation
                        onClick={() => {
                            setParentFormData(formData);
                            varify();
                        }}
                    >
                        Next
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}
