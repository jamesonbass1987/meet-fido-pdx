import React from 'react';
import { Route, Switch } from 'react-router-dom';

import UsersShow from '../UsersShow/UsersShow';
import Users from '../Users/Users';


import { Container } from 'semantic-ui-react';
import classes from './UsersRouter.css';

const usersSubLayout = ({ match }) => {
    return (
        <Container fluid className={classes.Container}>
            <Switch>
                <Route path='/users/:userId' component={UsersShow} />
                <Route path={match.url} exact component={Users} />
            </Switch>
        </Container>
    );
};

export default usersSubLayout;