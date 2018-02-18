import React from 'react';
import { connect } from 'react-redux';
import User from './User/User';
import Spinner from '../UI/Spinner/Spinner';

import { Item } from 'semantic-ui-react';

const users = props => {

    let usersList = <Spinner />

    if (!props.loading) {
        usersList = props.users.map(user => (
            <User key={user.username} user={user} />
        ))
    }

    return (
        <Item.Group divided>
            {usersList}
        </Item.Group>
    );
}

const mapStateToProps = state => ({
    users: state.user.users,
    loading: state.user.loading,
    currentFilter: state.user.userFilter,
})


export default connect(mapStateToProps)(users)