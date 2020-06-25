import React from 'react';
import {Switch} from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Membership from '../pages/Membership';
import Search from '../pages/Search';
import House from '../pages/House';

export default function Routes() {
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Signin} />
            <Route path="/register" component={Signup} />
            <Route path="/membership" component={Membership} />
            <Route path="/search" component={Search} />
            <Route path="/house/:id" component={House} />
        </Switch>
    )
}