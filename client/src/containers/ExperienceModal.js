import React from 'react';
import { Dialog } from '@material-ui/core';

const modalTexts = [
    <p>
        <h4>Tips</h4>
        {'1. Your profile is always placed at the top of your resume.'}
        <br />
        {'2. Describe yourself in short and strong terms with both the vacancy and job title'}
        <br />
        {' in mind. Do not use one liners, but try to be as concise as possible.'}
        <br />
        {'3. Create a good profile by mentioning each of the following at the very least'}
        <br />
        {' achievements, qualities, ambitions, goals, and what you are looking for.'}
    </p>,
    <p>
        <h4>Tips</h4>
        {'1. Use the correct job title for the job vacancy you are'}
        <br />
        {" applying for. For example, 'Seller' should be written as"}
        <br />
        {" 'Account Manager'."}
        <br />
        {'2. Describe your tasks, responsibilities, and any '}
        <br />
        {'competencies developed as clearly as possible.'}
        <br />
        {'3. Take a good look at what the company is looking for.'}
        <br />
        {'Compose your text with the needs of the company in mind,'}
        <br />
        {'and complete it with your own experience.'}
        <br />
        {'4. If you have work experience, only mention the relevant'}
        <br />
        {'tasks and responsibilities for the vacancy you wish to apply.'}
        <br />
        {'5. Sorting your items chronologically? Click on the Wheel '}
        <br />
        {"icon at the right top of the section and choose 'sort chronologically'."}
    </p>,
    <p>
        <h4>Tips</h4>
        {'1. Only mention courses that you have actually '}
        <br />
        {'attended.'}
        <br />
        {'2. Do not mention primary or secondary schools '}
        <br />
        {'unless they are your latest education.'}
        <br />
        {"3. If you didn't fully complete a course, it can "}
        <br />
        {'still add value to your resume or at least explain'}
        <br />
        {' a gap in your work history.'}
        <br />
        {'4. Add a description for your course to explain '}
        <br />
        {'exactly what it entailed to potential employers.'}
        <br />
        {'5. Sorting your items chronologically? Click on '}
        <br />
        {'the Wheel icon at the right top of the section '}
        <br />
        {"and choose 'sort chronologically'."}
    </p>
];

const ExperienceModal = ({ open, setOpen, textId }) => {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <div
                    style={{
                        backgroundColor: '#fffaee',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '20px',
                        width: '40em',
                        height: '25em'
                    }}
                >
                    {textId >= 0 && modalTexts[textId]}
                </div>
            </Dialog>
        </>
    );
};

export default ExperienceModal;
