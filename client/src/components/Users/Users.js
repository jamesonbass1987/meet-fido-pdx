import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import User from './User/User';
import Spinner from '../UI/Spinner/Spinner'

class Users extends Component {
    
    componentWillMount(){
        this.props.onFetchUsers();
    }
    

    render() {

        let usersList = <Spinner />

        if(!this.props.loading){
            usersList = this.props.users.map(user => (
                <User username={user.username} />
            ))
        }

        return (
            <div>
                <h4>Users List</h4>
                {usersList}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    users: state.user.users,
    loading: state.user.loading,
    currentFilter: state.user.userFilter,
})

const mapDispatchToProps = dispatch => {
    return {
       onFetchUsers: () => dispatch(actions.fetchUsers())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)