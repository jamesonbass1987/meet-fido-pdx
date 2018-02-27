import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchNeighborhoods, updateCurrentUser } from '../../store/actions/index';
import { updateObject, checkValidity } from '../../shared/utility';

import { Button, Form, Input, Header, TextArea } from 'semantic-ui-react'
import InputField from '../UI/Forms/Input/Input';
import DropdownField from '../UI/Forms/Dropdown/Dropdown';

import classes from './UserEditForm.css';

class UserEditForm extends Component {

    state = {
        formData: {
            bio: {
                value: '',
                validation: {
                    required: true,
                    minLength: 5
                },
                valid: false,
                touched: false
            },
            neighborhood_id: {
                value: '',
                validation: {
                    requiredDropdown: true,
                },
                valid: false,
                touched: false
            },
            password: {
                value: '',
                validation: {
                    required: false,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
            password_confirmation: {
                value: '',
                validation: {
                    required: false,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        }
    }

    componentWillMount(){
        this.props.fetchNeighborhoods();

        this.setState({
            formData: {
                ...this.state.formData,
                bio: {
                    ...this.state.formData.bio,
                    value: this.props.user.bio
                },
                neighborhood_id: {
                    ...this.state.formData.neighborhood_id,
                    value: this.props.user.neighborhood.id
                }
            }
        });
    }

    handleFormInputChange = (e, { value, id }) => {
        const updatedFormData = updateObject(this.state.formData, {
            [id]: updateObject(this.state.formData[id], {
                value,
                valid: checkValidity(e.target.value, this.state.formData[id].validation),
                touched: true
            })
        });

        this.setState({ formData: updatedFormData })
    }

    handleFormSubmission(event) {
        const userInfo = {
            bio: this.state.formData.bio.value,
            password: this.state.formData.password.value,
            password_confirmation: this.state.formData.password_confirmation.value,
            neighborhood_id: this.state.formData.neighborhood_id.value
        }

        this.props.updateCurrentUser(this.props.user, 'profileUpdate', userInfo);
        this.props.toggleModal('userForm');
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
                    <InputField
                        control={TextArea} 
                        onChange={this.handleFormInputChange} 
                        label='Bio:' 
                        id="bio" 
                        placeholder='Bio...'
                        type="text" 
                        value={this.state.formData.bio.value} />
                    <DropdownField
                        fluid
                        selection
                        id='neighborhood_id'
                        label="Neighborhood:"
                        options={dropdownItems}
                        onChange={this.handleFormInputChange}
                        defaultValue={this.state.formData.neighborhood_id.value}
                    />
                <Header as='h3'>Update Password</Header>
                    <InputField
                        control={Input} 
                        id="password" 
                        type="password" 
                        label='New Password:'
                        onChange={this.handleFormInputChange}
                        value={this.state.formData.password.value}
                        placeholder='Enter New Password...'/>
                    <InputField
                        control={Input} 
                        id="password_confirmation" 
                        type="password" 
                        label='Confirm New Password:' 
                        onChange={this.handleFormInputChange}
                        value={this.state.formData.password_confirmation.value}
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

const mapStateToProps = (state, ownProps) => {
    const { neighborhoods } = state.neighborhood;
    return { neighborhoods };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchNeighborhoods, updateCurrentUser }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(UserEditForm)