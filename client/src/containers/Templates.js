import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import axios from 'axios';

//
import { template_1, template_2, template_3 } from '../assets';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    templateGrid: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5px',
        marginBottom: '10px'
    },
    templateText: {
        textAlign: 'center',
        color: '4d4d4d'
    },
    templateDiv: {
        border: '1px solid #c5c5c4',
        padding: '7px',
        borderRadius: '5px'
    },
    buttonIcon: {
        width: '20px',
        marginRight: '2px'
    }
}));

const Templates = [
    {
        srcImage: template_1,
        caption: 'Template 1',
        id: 1
    },
    {
        srcImage: template_2,
        caption: 'Template 2',
        id: 2
    },
    {
        srcImage: template_3,
        caption: 'Template 3',
        id: 3
    }
];

const TemplateItem = ({ srcImage, caption, selection, hover, setHover, id, setSelection }) => {
    const classes = useStyles();
    const selectedStyle = {
        border: '3px solid #6a60e5'
    };
    const hoveredStyle = {
        border: '3px solid #d500f9'
    };
    return (
        <Grid item xs={12} md={4} xl={4} className={classes.templateGrid}>
            <div
                className={classes.templateDiv}
                onClick={() => {
                    setSelection(id);
                }}
                style={hover === id ? hoveredStyle : selection === id ? selectedStyle : {}}
                onMouseOver={() => {
                    setHover(id);
                }}
                onMouseLeave={() => {
                    setHover(0);
                }}
            >
                <div className={classes.templateText}>
                    <Typography variant="h6">{caption}</Typography>
                </div>
                <img style={{ width: '250px' }} alt="template 001" src={srcImage} />
            </div>
        </Grid>
    );
};

export default function CenteredGrid({ setProgress, personalData = {}, experienceData = {} }) {
    const classes = useStyles();
    const [selection, setSelection] = useState(0);
    const [hover, setHover] = useState(0);
    const fetchPdfandler = async ({ personalData = {}, experienceData = {}, templateId = 0 } = {}) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const body = { personalData, experienceData, templateId };
            await axios.post('/api/resume/create', body, config);
            // const res = axios.get('/api/resume/fetch', { responseType: 'blob' });
            // const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
            // fileDownload(pdfBlob, 'Resume.pdf');
            axios('/api/resume/fetch', {
                method: 'GET',
                responseType: 'blob'
                //Force to receive data in a Blob Format
            })
                .then((response) => {
                    //Create a Blob from the PDF Stream
                    const file = new Blob([response.data], {
                        type: 'application/pdf'
                    });
                    //Build a URL from the file
                    const fileURL = URL.createObjectURL(file);
                    //Open the URL on new Window
                    window.open(fileURL);
                })
                .catch((error) => {
                    console.log(error);
                });
        } catch (err) {
            console.log(err);
        }
    };
    const downloadHandler = async () => {
        await fetchPdfandler({ personalData, experienceData, templateId: selection });
    };
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid container spacing={3}>
                    {Templates.map((template, index) => (
                        <TemplateItem key={index} {...template} selection={selection} setHover={setHover} hover={hover} setSelection={setSelection} />
                    ))}
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button
                        variant="outlined"
                        fullWidth
                        color="secondary"
                        disableElevation
                        onClick={() => {
                            setProgress(2);
                        }}
                    >
                        Back
                    </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button disabled={selection === 0} variant="outlined" fullWidth color="primary" disableElevation onClick={downloadHandler}>
                        <GetAppIcon className={classes.buttonIcon} />
                        Download
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}
