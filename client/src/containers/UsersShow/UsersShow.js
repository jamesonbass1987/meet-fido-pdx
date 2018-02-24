import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import { bindActionCreators } from 'redux'
import { fetchUser, deleteUser, fetchCurrentUser, removeSelectedUser, updateUser } from '../../store/actions/index';

import { Container, Segment, Header, Divider } from 'semantic-ui-react';

import Spinner from '../../components/UI/Spinner/Spinner';
import UserProfile from '../../components/UserProfile/UserProfile';
import AdminControls from '../../components/AdminControls/AdminControls'
import UserEditForm from '../../components/UserEditForm/UserEditForm'
import UserImage from '../../components/UserImage/UserImage';
import Dogs from '../../components/Dogs/Dogs';
import Parks from '../../components/Parks/Parks';
import Modal from '../../components/UI/Modal/Modal';

import classes from './UsersShow.css'

class UsersShow extends Component {

    state = {
        deleteClicked: false,
        isUpdating: false,
        showModal: false
    }

    componentWillMount(){
        let id = this.props.match.params.userId || this.props.currentUser.id
        this.props.fetchUser(id);
        this.props.fetchCurrentUser();
    }

    componentWillUnmount(){
        this.props.removeSelectedUser();
    }

    componentWillUpdate(nextProps, nextState){
        if (this.props.match.path !== nextProps.match.path || this.state.isUpdating !== nextState.isUpdating || this.state !== nextState){
            let id = nextProps.match.params.userId || nextProps.currentUser.id
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

    render() {

        let adminControls;
        let profileModal;
        if (this.props.selectedUser && this.props.selectedUser.id === this.props.currentUser.id){
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
                                size="fullscreen"
                            >
                            <UserEditForm user={this.props.currentUser} toggleModal={this.handleModalToggle}/>
                            </Modal>

        }

        let userProfile = <Spinner />
        if (!this.props.loading && this.props.selectedUser) {
            const user = this.props.selectedUser;
            
            userProfile = <React.Fragment>
                            <Segment className={classes.ProfileHeaderSection}>
                                <UserImage src={user.profile_image_url} />
                                <Divider />
                                <Header className={classes.ProfileHeader} as='h1' size="huge" textAlign="center">
                                    <Header.Content>
                                        {user.username}
                                    </Header.Content>
                                    <Header.Subheader>
                                        {user.neighborhood.name}
                                    </Header.Subheader>
                                    <Header.Subheader className={classes.ProfileSubHeader}>
                                        {user.bio}
                                    </Header.Subheader>
                                </Header>
                            </Segment>
                            <Segment>
                                <Header as='h2' size="huge" >
                                    <Header.Content>
                                        My Dogs:
                                </Header.Content>
                                </Header>
                                <Dogs dogs={user.dogs} />
                                <Divider />
                                <Header as='h2' size="huge" >
                                    <Header.Content>
                                        Parks I Like:
                                </Header.Content>
                                </Header>
                                <Parks parks={user.parks} />
                                <Divider />
                            </Segment>  
                        </React.Fragment>
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
    currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchUser, deleteUser, fetchCurrentUser, removeSelectedUser, updateUser }, dispatch)
);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersShow))
