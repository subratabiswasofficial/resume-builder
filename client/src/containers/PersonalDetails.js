import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
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

export default function CenteredGrid({ setProgress }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3} xl={3}>
                    <Paper className={classes.paper}>xs=12</Paper>
                </Grid>

                <Grid item xs={12} md={9} xl={9}>
                    <Grid item xs={12}>
                        <TextField
                            // id="outlined-full-width"
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
                            label="Last Name"
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
                        label="Zip code"
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
                            setProgress(2);
                        }}
                    >
                        Next
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}
