import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreIcon from '@material-ui/icons/MoreVert';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import FaceIcon from '@material-ui/icons/Face';
import { List, ListItem, ListItemText } from '@material-ui/core';

// externals
import { logout } from '../../actions/auth';
import { logo } from '../../assets';

//css
const useStyles = makeStyles((theme) => ({
    logo: {
        width: '27px',
        height: '27px'
    },
    face: {
        width: '30px',
        height: '30px'
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        display: 'none',
        marginLeft: '10px',
        [theme.breakpoints.up('xs')]: {
            display: 'block'
        }
    },
    drawerList: {
        width: '200px',
        paddingLeft: '20px'
    },
    sectionMobile: {
        display: 'flex'
    },
    drawerComponentMargin: {
        marginLeft: '20px'
    }
}));

const Navbar = ({ isAuthenticated, logout }) => {
    // utils
    const history = useHistory();
    const classes = useStyles();
    // states
    const [drawerState, setDrawerState] = useState(false);
    const toggleDrawer = (state) => () => {
        setDrawerState(state);
    };
    return (
        <Fragment>
            <SwipeableDrawer anchor="right" open={drawerState} onClick={toggleDrawer(false)} onOpen={toggleDrawer(true)} onClose={toggleDrawer(false)}>
                {!isAuthenticated ? (
                    <Fragment>
                        <List className={classes.drawerList}>
                            <ListItem
                                button
                                onClick={() => {
                                    history.push('/');
                                }}
                            >
                                <ListItemText primary={'Home'} />
                            </ListItem>
                            <ListItem
                                button
                                onClick={() => {
                                    history.push('/signin');
                                }}
                            >
                                <ListItemText primary={'Login'} />
                            </ListItem>
                            <ListItem
                                button
                                onClick={() => {
                                    history.push('/signup');
                                }}
                            >
                                <ListItemText primary={'Register'} />
                            </ListItem>
                        </List>
                    </Fragment>
                ) : (
                    <Fragment>
                        <List className={classes.drawerList}>
                            <ListItem
                                button
                                onClick={() => {
                                    history.push('/');
                                }}
                            >
                                <ListItemText primary={'Home'} />
                            </ListItem>
                            <ListItem
                                button
                                onClick={() => {
                                    history.push('/myposts');
                                }}
                            >
                                <ListItemText primary={'My Posts'} />
                            </ListItem>
                            <ListItem
                                button
                                onClick={() => {
                                    history.push('/editpost');
                                }}
                            >
                                <ListItemText primary={'Add Post'} />
                            </ListItem>
                            <ListItem
                                button
                                onClick={() => {
                                    logout();
                                    history.push('/signin');
                                }}
                            >
                                <ListItemText primary={'Logout'} />
                            </ListItem>
                        </List>
                    </Fragment>
                )}
            </SwipeableDrawer>

            <div className={classes.grow}>
                <AppBar elevation={0} position="relative" style={{ background: 'transparent' }}>
                    <Toolbar>
                        <div>
                            <img alt="logo" src={logo} className={classes.logo} />
                        </div>
                        <div className={classes.grow} />
                        <div className={classes.sectionMobile}>
                            <IconButton aria-label="show more" color="inherit" onClick={toggleDrawer(true)}>
                                <MoreIcon className={classes.face} />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        </Fragment>
    );
};

const mapStateToPrpos = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToPrpos, { logout })(Navbar);
