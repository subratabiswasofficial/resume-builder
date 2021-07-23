import React from 'react';
import { Switch, Route } from 'react-router-dom';

// externals
import PrivateRoute from '../routing/PrivateRoute';

// bodys
import NotFound from '../components/body/NotFound'; //
import Register from '../components/body/Register'; //
import Login from '../components/body/Login'; //
import ResumeBuilder from '../components/body/BuildResume';

const Routes = () => {
    return (
        <Switch>
            <PrivateRoute path="/" component={ResumeBuilder} exact />
            <Route path="/signin" component={Login} exact />
            <Route path="/signup" component={Register} exact />
            <Route component={NotFound} />
        </Switch>
    );
};

export default Routes;
