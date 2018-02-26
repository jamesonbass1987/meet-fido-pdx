import React, { Component } from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Modal from '../../UI/Modal/Modal';
import DogForm from '../../DogForm/DogForm';
import classes from './Dog.css'

class Dog extends Component {

    state = {
        showModal: false,
        showEditBtn: this.props.dog.user_id === this.props.currentUser.id && this.props.isEditable
    }

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    
    render(){

        

        const ownerInfo = this.props.dog.user ? (
            <Card.Content extra>
                <Link
                    to={`/users/${this.props.dog.user.id}`}
                >
                    <Icon name='user' /> Owner: {this.props.dog.user.username}
                </Link>
            </Card.Content>) :
            null

        let ownerControls;

        if (this.state.showEditBtn){
            ownerControls = <Button onClick={this.toggleModal} color="blue" >Edit</Button>
        }

        let dogModal = <Modal
                handleClose={this.toggleModal}
                show={this.state.showModal}
                header="Edit Profile"
                size="fullscreen"
                type="dogForm"
            >
                <DogForm type="editDog" headerTitle="Edit Dog" dog={this.props.dog} dogId={this.props.dog.id} toggleModal={this.toggleModal} />
            </Modal>


        return(
            <Card id={this.props.id} className={classes.Dog}>
                <Image centered src={this.props.dog.profile_image_url} />
                <Card.Content>
                    <Card.Header>{this.props.dog.name}</Card.Header>
                    <Card.Meta>{this.props.dog.breed.name} | {this.props.dog.age.name} | {this.props.dog.sex} | {this.props.dog.size.name} </Card.Meta>
                    <Card.Description>
                        <p>{this.props.dog.description}</p>
                    </Card.Description>
                </Card.Content>
                {ownerInfo}
                {ownerControls}
                {dogModal}
            </Card>
        );
    }    
};

const mapStateToProps = state => ({
    currentUser: state.auth.currentUser
})


export default connect(mapStateToProps)(Dog)
