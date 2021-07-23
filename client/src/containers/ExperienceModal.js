import React from 'react';
import {Dialog} from '@material-ui/core';

const ExperienceModal = ({open,setOpen}) => {
    const handleClose = ()=>{
       setOpen(false);
    }
    return (
        <>
           <Dialog
            open={open}
            onClose={handleClose}
            >
                <div style={{width:'20em',height:'20em',background:'#fff'}}>
                   NOOB TUI
                </div>
            </Dialog>
        </>
    )
}

export default ExperienceModal;
