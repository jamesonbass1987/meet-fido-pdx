import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import User from './User/User';
import Spinner from '../UI/Spinner/Spinner'

const users = props => {

    let usersList = <Spinner />

    if (!props.loading) {
        usersList = props.users.map(user => (
            <User key={user.username} username={user.username} />
        ))
    }

    return (
        <div>
            <h4>Users List</h4>
            {usersList}
        </div>
    );
}

const mapStateToProps = state => ({
    users: state.user.users,
    loading: state.user.loading,
    currentFilter: state.user.userFilter,
})


export default connect(mapStateToProps)(users)