import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux'
import { fetchUsers, fetchUser } from '../../store/actions/index';

import { Container } from 'semantic-ui-react';

import PageHeading from '../../components/PageHeading/PageHeading';
import UsersComponent from '../../components/UsersComponent/UsersComponent';
import Spinner from '../../components/UI/Spinner/Spinner';

class Users extends Component {

    componentWillMount() {
        this.props.fetchUsers();
    }

    render(){

        let users = <Spinner />

        if (!this.props.loading && this.props.currentUser) {
            users = <UsersComponent 
                        users={this.props.users.filter(user => user.id !== this.props.currentUser.id)} 
                        loading={this.props.loading} 
                        currentFilter={this.props.currentFilter} 
                        parkFilter={this.props.parkFilter}
                    />
        }

        return (
            <Container>
                <PageHeading
                    as="h1"
                    textAlignment="center"
                    iconName="users"
                    iconColor="blue"
                    headingText="Search Users"
                    type="icon"
                    subheadingText="Find others looking to meet up for a puppy playdate in PDX." />
                {users}
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    users: state.user.users,
    loading: state.user.loading,
    currentFilter: state.user.userFilter,
    parkFilter: state.park.parkFilter,
    currentUser: state.auth.currentUser
})

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchUsers, fetchUser }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(Users)
