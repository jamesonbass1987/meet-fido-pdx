import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import { bindActionCreators } from 'redux'
import { fetchUser, deleteUser, fetchCurrentUser, removeSelectedUser, updateUser } from '../../store/actions/index';

import { Container } from 'semantic-ui-react';

import Spinner from '../../components/UI/Spinner/Spinner';
import UserProfile from '../../components/UserProfile/UserProfile';
import AdminControls from '../../components/AdminControls/AdminControls'
import Modal from '../../components/UI/Modal/Modal';

class UsersShow extends Component {

    state = {
        deleteClicked: false,
        isUpdating: false,
        showModal: false
    }

    componentWillMount(){
        let id = this.props.match.params.userId || this.props.currentUser
        this.props.fetchUser(id);
    }


    componentWillUnmount(){
        this.props.removeSelectedUser();
    }

    componentWillUpdate(nextProps, nextState){
        if (this.props.match.path !== nextProps.match.path || this.state.isUpdating !== nextState.isUpdating){
            let id = nextProps.match.params.userId || nextProps.currentUser
            this.props.removeSelectedUser();
            this.props.fetchUser(id);
        }
    }

    handleModalToggle = () => (this.setState({showModal: !this.state.showModal}))

    show = () => this.setState({ deleteClicked: true })
    
    handleCancel = () => this.setState({ deleteClicked: false })

    handleConfirm = () => {
        this.setState({ deleteClicked: false })
        this.props.deleteUser(this.props.currentUser)
        this.props.history.push("/logout")
    }

    handleParkAddRemove = (parkId) => {
        this.props.updateUser(this.props.selectedUser, 'parksList', parkId)
        this.props.removeSelectedUser();
        this.setState({isUpdating: true})
    }

    render() {

        let adminControls;
        let profileModal;
        if (this.props.selectedUser && this.props.selectedUser.id === this.props.currentUser){
            adminControls = <AdminControls 
                                currentUser={this.props.currentUser} 
                                selectedUser={this.props.selectedUser} 
                                show={this.show}
                                open={this.state.deleteClicked}
                                handleConfirm={this.handleConfirm}
                                handleCancel={this.handleCancel}
                                showModal={this.state.showModal}
                                toggleModal={this.handleModalToggle}
                                fluid    
                            />

            profileModal = <Modal
                                handleClose={this.handleModalToggle}
                                show={this.state.showModal}
                                header="Edit Profile"
                            >
                                
                            </Modal>

        }

        let userProfile = <Spinner />
        if (!this.props.loading && this.props.selectedUser) {
            userProfile = <UserProfile
                user={this.props.selectedUser}
                loading={this.props.loading}
                addRemovePark={this.handleParkAddRemove}
                currentUser={this.props.currentUser}
                isProfileOwner={!!adminControls}
            />
        };




        return (
            <Container>
                {userProfile}
                {adminControls}
                {profileModal}
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    selectedUser: state.user.selectedUser,
    loading: state.user.loading,
    currentUser: state.auth.currentUser
})

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchUser, deleteUser, fetchCurrentUser, removeSelectedUser, updateUser }, dispatch)
);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersShow))
