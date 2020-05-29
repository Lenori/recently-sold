import React from 'react';
import {Switch} from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Profile from '../pages/Profile';

export default function Routes() {
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Signin} />
            <Route path="/register" component={Signup} />

            <Route path="/profile" isPrivate component={Profile} />
        </Switch>
    )
}