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
import PersonalDetails from '../containers/Experiences';
const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/signin" component={Login} exact />
            <Route path="/signup" component={Register} exact />
            {/* <Route path="/resume" component={ResumeBuilder} exact /> */}
            <Route path="/resume" component={PersonalDetails} exact />
            {/* <PrivateRoute path="/editpost" component={EditPost} exact /> */}
            <Route component={NotFound} />
        </Switch>
    );
};

export default Routes;
