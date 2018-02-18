import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import UsersComponent from '../../components/UsersComponent/UsersComponent';
import UsersShow from '../UsersShow/UsersShow';

const users = ({match, users}) => {
    return (
            <div>
                <Switch>
                    <Route path={`${match.url}/:userId`} component={UsersShow} />
                    <Route exact path={match.url} component={UsersComponent} />
                </Switch>
            </div>
        );
}

export default users;