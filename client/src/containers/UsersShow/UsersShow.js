import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { bindActionCreators } from 'redux'
import { fetchUser, deleteUser, removeSelectedUser, fetchCurrentUser, updateCurrentUser } from '../../store/actions/index';

import AdminControls from '../../components/AdminControls/AdminControls'
import UserEditForm from '../../components/UserEditForm/UserEditForm'
import DogForm from '../../components/DogForm/DogForm'
import UserProfileHeader from '../../components/UserProfileHeader/UserProfileHeader'
import UserProfileContent from '../../components/UserProfileContent/UserProfileContent'

import { Container, Popup, Button } from 'semantic-ui-react';
import Spinner from '../../components/UI/Spinner/Spinner';
import Modal from '../../components/UI/Modal/Modal';

import classes from './UsersShow.css';

class UsersShow extends Component {

    constructor(props){
        super(props);

        this.state = {
            showDelete: false,
            showModal: {
                userForm: false,
                dogForm: false
            }
        };
     
    }

    componentWillMount(){
        const id = this.props.match.params.userId;
        this.props.fetchUser(id);
    }

    componentWillUnmount() {
        this.props.removeSelectedUser();
    }

    handleModalToggle = type => {
        this.setState({showModal: {
                                ...this.state.showModal,
                                [type]: !this.state.showModal[type]
                            }
                        });
    };

    show = () => this.setState({ showDelete: true });
    
    handleCancel = () => this.setState({ showDelete: false });

    handleConfirm = () => {
        this.setState({ showDelete: false });
        this.props.deleteUser(this.props.currentUser);
        this.props.history.push("/logout");
    };


    render() {
        
        let adminControls;
        let userFormModal;
        let dogFormModal;
        let addDogBtn
        if (this.props.selectedUser && this.props.selectedUser.id === this.props.currentUser.id){
            adminControls = <AdminControls 
                                currentUser={this.props.currentUser} 
                                selectedUser={this.props.selectedUser} 
                                show={this.show}
                                open={this.state.showDelete}
                                handleConfirm={this.handleConfirm}
                                handleCancel={this.handleCancel}
                                showModal={this.state.showModal}
                                toggleModal={this.handleModalToggle} 
                                fluid
                            />;

            userFormModal = <Modal
                                handleClose={this.handleModalToggle}
                                show={this.state.showModal.userForm}
                                header="Edit Profile"
                                size="fullscreen"
                                type="userForm"
                            >
                                <UserEditForm user={this.props.currentUser} toggleModal={this.handleModalToggle}/>
                            </Modal>;

            dogFormModal = <Modal
                                handleClose={this.handleModalToggle}
                                show={this.state.showModal.dogForm}
                                header="Edit Profile"
                                size="fullscreen"
                                type="dogForm"
                            >
                                <DogForm headerTitle="Add New Dog" type="createDog" toggleModal={this.handleModalToggle} />
                            </Modal>;

            addDogBtn = <Popup
                            trigger={<Button
                                color="blue"
                                className={classes.CreateDogBtn}
                                onClick={() => this.handleModalToggle('dogForm')}
                                icon='add'
                            />}
                            content="Add a new dog to your account."
                            size="small"
                        />

        };

        let userProfile = <Spinner />;
        if (!this.props.loading && this.props.selectedUser) {
            const user = this.props.selectedUser;

            userProfile = <React.Fragment>
                            <UserProfileHeader user={user} />
                            <UserProfileContent 
                                user={user} 
                                handleModalToggle={this.handleModalToggle} 
                                addBtn={addDogBtn}
                            />
                        </React.Fragment>;
        };

        return (
            <Container className={classes.Container} >
                {userProfile}
                {adminControls}
                {userFormModal}
                {dogFormModal}
            </Container>
        );
    };
};

const mapStateToProps = state => {
    const { selectedUser, loading, isUpdating } = state.user;
    const { currentUser } = state.auth;
    return { selectedUser,
             loading, 
             isUpdating,
             currentUser,
            };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchUser, deleteUser, removeSelectedUser, fetchCurrentUser, updateCurrentUser }, dispatch)
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersShow));
