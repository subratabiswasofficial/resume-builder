import React from 'react';
import { Switch, Route } from 'react-router-dom';

// externals
// import PrivateRoute from '../routing/PrivateRoute';

// bodys
import Home from '../components/body/Home'; //
import NotFound from '../components/body/NotFound'; //
import Register from '../components/body/Register'; //
import Login from '../components/body/Login'; //
import ResumeBuilder from '../components/body/BuildResume';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/signin" component={Login} exact />
            <Route path="/signup" component={Register} exact />
            <Route path="/resume" component={ResumeBuilder} exact />
            <Route component={NotFound} />
        </Switch>
    );
};

export default Routes;
