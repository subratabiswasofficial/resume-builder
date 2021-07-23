import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';

// layouts
import Navbar from './components/layout/Navbar';
import Spacer from './components/layout/Spacer';

// externals
import store from './store';
import Alert from './components/layout/AlertMaker';
import Routes from './routes';

// utils
import { loadUser } from './actions/auth';

// auth
if (localStorage.token) {
    store.dispatch(loadUser());
}

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <Provider store={store}>
            <Router>
                <CssBaseline />
                <Navbar />
                {/* <Spacer /> */}
                <Alert />
                <Routes />
                <Spacer />
            </Router>
        </Provider>
    );
};

export default App;
