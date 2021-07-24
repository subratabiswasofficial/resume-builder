import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { DefaultEditor } from 'react-simple-wysiwyg';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Typography } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import SchoolIcon from '@material-ui/icons/School';
import SaveIcon from '@material-ui/icons/Save';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import ExperienceModal from './ExperienceModal';

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
const useStylesAccordian = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
    heading: {
        color: '#4d4d4d',
        fontSize: theme.typography.pxToRem(16),
        fontWeight: 500
    },
    icon: {
        color: '#4d4d4d',
        marginRight: '5px'
    },
    buttonIcon: {
        color: '#4d4d4d',
        width: '20px',
        marginRight: '2px'
    }
}));

export default function CenteredGrid({ setProgress, initialFormData, setParentFormData }) {
    const classes = useStyles();
    const accodianClasses = useStylesAccordian();
    const [openModal, setModal] = useState(false);
    const [modalText, setModalText] = useState(-1);
    const [formData, setFormData] = useState(initialFormData);

    const updateForm = (key, e) => {
        setFormData({ ...formData, [key]: e.target.value });
    };
    const onChangeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <div className={accodianClasses.root}>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                    <AccountCircleIcon className={accodianClasses.icon} />
                                    <Typography className={accodianClasses.heading}>Key competencics</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                            <Typography variant="caption">Description</Typography>
                                            <DefaultEditor
                                                value={formData.competencics}
                                                onChange={(e) => {
                                                    updateForm('competencics', e);
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Button
                                                style={{ float: 'left' }}
                                                variant="outlined"
                                                color="default"
                                                disableElevation
                                                onClick={() => {
                                                    setModal(!openModal);
                                                    setModalText(0);
                                                }}
                                            >
                                                <HelpOutlineIcon className={accodianClasses.buttonIcon} /> Tips
                                            </Button>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Button style={{ float: 'right' }} variant="outlined" color="default" disableElevation>
                                                <SaveIcon className={accodianClasses.buttonIcon} /> Save
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                    <WorkOutlineIcon className={accodianClasses.icon} />
                                    <Typography className={accodianClasses.heading}>Internship experiences</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={3} style={{ paddingRight: '12px' }}>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                // id="outlined-full-width"
                                                onChange={onChangeHandler}
                                                value={formData.jobTitle}
                                                name="jobTitle"
                                                label="Job title"
                                                style={{ margin: 8 }}
                                                placeholder="Job title"
                                                fullWidth
                                                margin="normal"
                                                InputLabelProps={{
                                                    shrink: true
                                                }}
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                // id="outlined-full-width"
                                                onChange={onChangeHandler}
                                                value={formData.city}
                                                name="city"
                                                label="City/Town"
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
                                                value={formData.employer}
                                                name="employer"
                                                label="Employer"
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
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                // id="outlined-full-width"
                                                onChange={onChangeHandler}
                                                value={formData.startDate}
                                                name="startDate"
                                                label="Start date"
                                                type="date"
                                                style={{ margin: 8 }}
                                                placeholder="Job title"
                                                fullWidth
                                                margin="normal"
                                                InputLabelProps={{
                                                    shrink: true
                                                }}
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                // id="outlined-full-width"
                                                onChange={onChangeHandler}
                                                value={formData.endDate}
                                                name="endDate"
                                                label="End date"
                                                type="date"
                                                style={{ margin: 8 }}
                                                placeholder="Job title"
                                                fullWidth
                                                margin="normal"
                                                InputLabelProps={{
                                                    shrink: true
                                                }}
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="caption">Description</Typography>
                                            <DefaultEditor
                                                value={formData.internshipDescription}
                                                onChange={(e) => {
                                                    updateForm('internshipDescription', e);
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Button
                                                style={{ float: 'left' }}
                                                variant="outlined"
                                                color="default"
                                                disableElevation
                                                onClick={() => {
                                                    setModal(!openModal);
                                                    setModalText(1);
                                                }}
                                            >
                                                <HelpOutlineIcon className={accodianClasses.buttonIcon} /> Tips
                                            </Button>
                                        </Grid>
                                        <Grid item xs={9}>
                                            <Button style={{ float: 'right' }} variant="outlined" color="default" disableElevation>
                                                <SaveIcon className={accodianClasses.buttonIcon} /> Save
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button variant="contained" fullWidth color="default" disableElevation>
                                                <DeleteIcon className={accodianClasses.buttonIcon} /> Delete
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                    <SchoolIcon className={accodianClasses.icon} />
                                    <Typography className={accodianClasses.heading}>Education and Qualifications</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={3} style={{ paddingRight: '12px' }}>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                // id="outlined-full-width"
                                                name="degree"
                                                onChange={onChangeHandler}
                                                value={formData.degree}
                                                label="Degree"
                                                style={{ margin: 8 }}
                                                placeholder="Degree"
                                                fullWidth
                                                margin="normal"
                                                InputLabelProps={{
                                                    shrink: true
                                                }}
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                // id="outlined-full-width"
                                                name="eduCity"
                                                onChange={onChangeHandler}
                                                value={formData.eduCity}
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
                                        <Grid item xs={12}>
                                            <TextField
                                                // id="outlined-full-width"
                                                name="school"
                                                onChange={onChangeHandler}
                                                value={formData.school}
                                                label="School"
                                                style={{ margin: 8 }}
                                                placeholder="School"
                                                fullWidth
                                                margin="normal"
                                                InputLabelProps={{
                                                    shrink: true
                                                }}
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                // id="outlined-full-width"
                                                name="eduStartDate"
                                                onChange={onChangeHandler}
                                                value={formData.eduStartDate}
                                                label="Start date"
                                                type="date"
                                                style={{ margin: 8 }}
                                                placeholder="Job title"
                                                fullWidth
                                                margin="normal"
                                                InputLabelProps={{
                                                    shrink: true
                                                }}
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                // id="outlined-full-width"
                                                name="eduEndDate"
                                                onChange={onChangeHandler}
                                                value={formData.eduEndDate}
                                                label="End date"
                                                type="date"
                                                style={{ margin: 8 }}
                                                placeholder="Job title"
                                                fullWidth
                                                margin="normal"
                                                InputLabelProps={{
                                                    shrink: true
                                                }}
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="caption">Description</Typography>
                                            <DefaultEditor
                                                value={formData.eduDescription}
                                                onChange={(e) => {
                                                    updateForm('eduDescription', e);
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Button
                                                style={{ float: 'left' }}
                                                variant="outlined"
                                                color="default"
                                                disableElevation
                                                onClick={() => {
                                                    setModal(!openModal);
                                                    setModalText(2);
                                                }}
                                            >
                                                <HelpOutlineIcon className={accodianClasses.buttonIcon} /> Tips
                                            </Button>
                                        </Grid>
                                        <Grid item xs={9}>
                                            <Button style={{ float: 'right' }} variant="outlined" color="default" disableElevation>
                                                <SaveIcon className={accodianClasses.buttonIcon} /> Save
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button variant="contained" fullWidth color="default" disableElevation>
                                                <DeleteIcon className={accodianClasses.buttonIcon} /> Delete
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button variant="contained" fullWidth color="default" disableElevation>
                                                <AddCircleOutlineIcon className={accodianClasses.buttonIcon} /> Add another education
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Button
                            variant="outlined"
                            fullWidth
                            color="secondary"
                            disableElevation
                            onClick={() => {
                                setProgress(1);
                            }}
                        >
                            Back
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button
                            variant="outlined"
                            fullWidth
                            color="primary"
                            disableElevation
                            onClick={() => {
                                setParentFormData(formData);
                                setProgress(3);
                            }}
                        >
                            Next
                        </Button>
                    </Grid>
                </Grid>
            </div>
            <ExperienceModal open={openModal} setOpen={setModal} textId={modalText} />
        </>
    );
}
