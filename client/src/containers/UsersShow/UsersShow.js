import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux'
import { fetchUser } from '../../store/actions/index';

import UserProfile from '../../components/UserProfile/UserProfile';

class UsersShow extends Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {

        return (
            <React.Fragment>
                <UserProfile user={this.props.selectedUser}/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    selectedUser: state.user.selectedUser,
    loading: state.user.loading
})

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchUser }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(UsersShow)
