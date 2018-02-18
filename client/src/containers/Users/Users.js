import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import UsersComponent from '../../components/UsersComponent/UsersComponent';
import UsersShow from '../UsersShow/UsersShow';

class Users extends Component {

    componentDidMount() {
        if (this.props.match.url === '/users'){
            this.props.onFetchUsers();
        }
    }

    render(){

        return (
            <div>
                <Switch>
                    <Route path={`${this.props.match.url}/:userId`} exact component={UsersShow} />
                    <Route path={this.props.match.url} component={UsersComponent} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    
})

const mapDispatchToProps = dispatch => {
    return {
        onFetchUsers: () => dispatch(actions.fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)