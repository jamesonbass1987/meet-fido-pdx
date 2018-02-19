import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { fetchUsers } from '../../store/actions/index';

import classes from './Users.css';

import { Container } from 'semantic-ui-react';

import UsersComponent from '../../components/UsersComponent/UsersComponent';
import UsersShow from '../UsersShow/UsersShow';

class Users extends Component {

    componentDidMount() {
        if (this.props.match.url === '/users'){
            this.props.fetchUsers();
        }
    }

    render(){

        return (
            <Container className={classes.Container}>
                <Switch>
                    <Route path={`${this.props.match.url}/:userId`} exact component={UsersShow} />
                    <Route path={this.props.match.url} component={UsersComponent} />
                </Switch>
            </Container>
        );
    }
}


const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchUsers }, dispatch)
);

export default connect(null, mapDispatchToProps)(Users)
