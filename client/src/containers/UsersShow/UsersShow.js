import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import { bindActionCreators } from 'redux'
import { fetchUser, deleteUser, fetchCurrentUser, removeSelectedUser } from '../../store/actions/index';

import { Container } from 'semantic-ui-react';

import Spinner from '../../components/UI/Spinner/Spinner';
import UserProfile from '../../components/UserProfile/UserProfile';
import AdminControls from '../../components/AdminControls/AdminControls'

class UsersShow extends Component {

    state = {
        deleteClicked: false,
        isPageOwner: false
    }

    componentWillMount(){
        let id = this.props.match.params.userId || this.props.currentUserId
        this.props.fetchUser(id);
    }

    componentDidMount(){
        if (this.props.currentUserId === this.props.selectedUser){
            this.setState({ isPageOwner: true })
        }
    }

    componentWillUnmount(){
        this.props.removeSelectedUser();
    }

    componentWillUpdate(nextProps){
        if (this.props.match.path !== nextProps.match.path) {
            let id = nextProps.match.params.userId || nextProps.currentUserId
            this.props.fetchUser(id);
        }

    }

    show = () => this.setState({ deleteClicked: true })
    
    handleCancel = () => this.setState({ deleteClicked: false })

    handleConfirm = () => {
        this.setState({ deleteClicked: false })
        this.props.deleteUser(this.props.currentUserId)
        this.props.history.push("/logout")
    }

    render() {

        let userProfile = <Spinner />
        if(!this.props.loading && this.props.selectedUser){
            userProfile = <UserProfile user={this.props.selectedUser} loading={this.props.loading} />
        };

        let adminControls;
        if (this.props.selectedUser && this.props.selectedUser.id === this.props.currentUserId){
            adminControls = <AdminControls 
                                currentUserId={this.props.currentUserId} 
                                selectedUser={this.props.selectedUser} 
                                show={this.show}
                                open={this.state.deleteClicked}
                                handleConfirm={this.handleConfirm}
                                handleCancel={this.handleCancel}
                                message="Delete My Profile"
                                color='red'
                                fluid    
                            />
        }

        return (
            <Container>
                {userProfile}
                {adminControls}
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    selectedUser: state.user.selectedUser,
    loading: state.user.loading,
    currentUserId: state.auth.currentUserId
})

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchUser, deleteUser, fetchCurrentUser, removeSelectedUser }, dispatch)
);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersShow))
