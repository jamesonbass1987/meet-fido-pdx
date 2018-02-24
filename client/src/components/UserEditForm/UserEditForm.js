import React, { Component } from 'react';
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import { fetchNeighborhoods, updateCurrentUser } from '../../store/actions/index';

import classes from './UserEditForm.css';

import { Button, Form, Input, Header, TextArea } from 'semantic-ui-react'

class UserEditForm extends Component {

    state = {
        formData: {
            bio: '',
            neighborhood_id: '',
            password: '',
            password_confirmation: ''
        }
    }

    componentWillMount(){
        this.props.fetchNeighborhoods();

        this.setState({
            formData: {
                bio: this.props.user.bio,
                neighborhood_id: this.props.user.neighborhood.id,
            }
        });
    }

    handleFormInputChange = (event, key) => {
        this.setState({
            formData: {
                ...this.state.formData,
                [key]: event.target.value
            }
        })
    }

    handleFormDropdownChange = (event, { value }) => {
        this.setState({ formData: { 
                            ...this.state.formData,
                            neighborhood_id: value 
                        }})
    }

    handleFormSubmission(event) {
        const userInfo = {
            bio: this.state.formData.bio,
            password: this.state.formData.password,
            password_confirmation: this.state.formData.password_confirmation,
            neighborhood_id: this.state.formData.neighborhood_id
        }

        this.props.updateCurrentUser(this.props.user, 'profileUpdate', userInfo);
        this.props.toggleModal();
    }

    render() {

        const dropdownItems = this.props.neighborhoods.map(neighborhood => {
            return {
                text: neighborhood.name,
                value: neighborhood.id,
                key: neighborhood.name + neighborhood.id
            }
        })

        return (
            <Form className={classes.EditForm} onSubmit={() => this.handleFormSubmission()}>
                <Header as='h1'>Edit Profile</Header>
                    <Form.Field 
                        control={TextArea} 
                        onChange={event => this.handleFormInputChange(event, 'bio')} 
                        label='Bio:' 
                        id="bio" 
                        placeholder='Bio...' 
                        value={this.state.formData.bio} />
                    <Form.Dropdown
                        fluid
                        selection
                        id='neighborhood'
                        options={dropdownItems}
                        onChange={this.handleFormDropdownChange}
                        defaultValue={this.state.formData.neighborhood_id}
                    />
                <Header as='h3'>Update Password</Header>
                    <Form.Field 
                        control={Input} 
                        id="password" 
                        type="password" 
                        label='New Password'
                        onChange={event => this.handleFormInputChange(event, 'password')} 
                        placeholder='Enter New Password...'/>
                    <Form.Field 
                        control={Input} 
                        id="password_confirmation" 
                        type="password" 
                        label='Confirm New Password' 
                        onChange={event => this.handleFormInputChange(event, 'password_confirmation')} 
                        placeholder='Confirm New Password...' />
                <Button 
                    type="submit" 
                    fluid 
                    size='large'
                    color='blue'
                    >Update Profile</Button>
            </Form>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    neighborhoods: state.neighborhood.neighborhoods
})

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchNeighborhoods, updateCurrentUser }, dispatch)
)


export default connect(mapStateToProps, mapDispatchToProps)(UserEditForm)