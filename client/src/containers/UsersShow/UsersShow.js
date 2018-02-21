import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux'
import { fetchUser } from '../../store/actions/index';

import { Container } from 'semantic-ui-react';

import Spinner from '../../components/UI/Spinner/Spinner';
import UserProfile from '../../components/UserProfile/UserProfile';

class UsersShow extends Component {

    componentDidMount() {
        const id = this.props.match.params.userId
        this.props.fetchUser(id);
    }

    render() {

        let userProfile = <Spinner />

        if(!this.props.loading && this.props.selectedUser){
            userProfile = <UserProfile user={this.props.selectedUser} loading={this.props.loading} />
        }

        return (
            <Container>
                {userProfile}
            </Container>
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
