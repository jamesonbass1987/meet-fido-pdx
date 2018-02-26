import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as actions from '../../store/actions/index';
import classes from './DogForm.css'
import { updateObject, checkValidity } from '../../shared/utility';

import { Button, Form, Input, Header, TextArea, Dropdown, Image, Label } from 'semantic-ui-react'

class DogForm extends Component {

    state = {
        formData: {
            name: {
                value: '',
                validation: {
                    required: true,
                    minLength: 1
                },
                valid: false,
                touched: false
            },
            description: {
                value: '',
                validation: {
                    required: true,
                    minLength: 1
                },
                valid: false,
                touched: false
            },
            age_id: {
                value: '',
                validation: {
                    requiredDropdown: true,
                },
                valid: false,
                touched: false
            },
            sex: {
                value: '',
                validation: {
                    requiredDropdown: true,
                },
                valid: false,
                touched: false
            },
            breed_id: {
                value: '',
                validation: {
                    requiredDropdown: true,
                },
                valid: false,
                touched: false
            }, 
            size_id: {
                value: '',
                validation: {
                    requiredDropdown: true,
                },
                valid: false,
                touched: false
            },
            profile_image_url: {
                value: '',
                validation: {
                    requiredURL: true,
                },
                valid: false,
                touched: false
            }
        },
        dogId: this.props.dogId,
        userId: this.props.currentUser.id
    }

    componentWillMount() {
        if (this.props.breeds.length === 0) {
            this.props.onFetchAttribute("ages")
            this.props.onFetchAttribute("breeds")
            this.props.onFetchAttribute("sizes")
        }

        if (this.props.type === 'editDog'){
            this.setState({
                formData:{
                    ...this.state.formData,
                    name: {
                        ...this.state.formData.name,
                        value: this.props.dog.name,
                        touched: true,
                        valid: true
                    },
                    description: {
                        ...this.state.formData.description,
                        value: this.props.dog.description,
                        touched: true,
                        valid: true
                    },
                    age_id: {
                        ...this.state.formData.age_id,
                        value: this.props.dog.age.id,
                        touched: true,
                        valid: true
                    },
                    sex: {
                        ...this.state.formData.sex,
                        value: this.props.dog.sex,
                        touched: true,
                        valid: true
                    },
                    breed_id: {
                        ...this.state.formData.breed_id,
                        value: this.props.dog.breed.id,
                        touched: true,
                        valid: true
                    },
                    size_id: {
                        ...this.state.formData.size_id,
                        value: this.props.dog.size.id,
                        touched: true,
                        valid: true
                    },
                    profile_image_url: {
                        ...this.state.formData.profile_image_url,
                        value: this.props.dog.profile_image_url,
                        touched: true,
                        valid: true
                    }
                }
            })
        }
    }

    handleFormInputChange = (e, { value, id }) => {

        const updatedFormData = updateObject(this.state.formData, {
            [id]: updateObject(this.state.formData[id], {
                value,
                valid: checkValidity(value, this.state.formData[id].validation),
                touched: true
            })
        });
        
        this.setState({ formData: updatedFormData })
    }

    handleFormSubmission(event) {
        const { name, profile_image_url, description, sex, size_id, age_id, breed_id } = this.state.formData
        const dogInfo = {
            name: name.value,
            description: description.value,
            profile_image_url: profile_image_url.value,
            sex: sex.value,
            size_id: size_id.value,
            age_id: age_id.value,
            breed_id: breed_id.value,
            id: this.state.dogId,
            user_id: this.state.userId
        }

        const formType = this.props.type

        debugger;

        this.props.addEditDog(dogInfo, formType);
        this.props.toggleModal('dogForm');
    }

    render() {

        const breedsDropdownItems = this.props.breeds.map((breed, i) => {
            return {
                text: breed.name,
                value: breed.id,
                key: i + breed
            }
        })

        const sizesDropdownItems = this.props.sizes.map((size, i) => {
            return {
                text: size.name,
                value: size.id,
                key: i + size
            }
        })

        const agesDropdownItems = this.props.ages.map((age, i) => {
            return {
                value: age.id,
                text: age.name,
                key: i + age
            }
        })

        const sexesDropdownItems = [
                                {value: 'Male', text: 'Male'}, 
                                {value: 'Female', text: 'Female'}
                            ]

        const submitDisabled = Object.values(this.state.formData).some(inputField => !inputField.valid)

        console.log(this.state)

        return (
            <Form className={classes.DogForm} onSubmit={() => this.handleFormSubmission()}>
                <Header as='h1'>{this.props.headerTitle}</Header>
                <Form.Field
                    control={Input}
                    id="name"
                    type="text"
                    label='Name:'
                    onChange={this.handleFormInputChange}
                    value={this.state.formData.name.value}
                    placeholder='Enter your dogs name...' />
                <Form.Field
                    control={Input}
                    id="profile_image_url"
                    type="text"
                    label='Image URL:'
                    onChange={this.handleFormInputChange}
                    value={this.state.formData.profile_image_url.value}
                    placeholder='Please enter an image url...' />
                <Form.Field
                    control={TextArea}
                    onChange={this.handleFormInputChange}
                    label='About your dog:'
                    type='text'
                    id="description"
                    placeholder='Write a description about your dog...'
                    value={this.state.formData.description.value} />
                <Dropdown
                    placeholder='Sex'
                    onChange={this.handleFormInputChange}
                    fluid
                    search
                    className={classes.InputDropdowns}
                    selection
                    options={sexesDropdownItems}
                    defaultValue={this.state.formData.sex.value}
                    id='sex'
                />

                <Dropdown
                    placeholder='Breed'
                    onChange={this.handleFormInputChange}
                    fluid
                    search
                    className={classes.InputDropdowns}
                    selection
                    options={breedsDropdownItems}
                    defaultValue={this.state.formData.breed_id.value}
                    id='breed_id'
                />
                <Dropdown
                    placeholder='Age'
                    fluid
                    className={classes.InputDropdowns}
                    selection
                    options={agesDropdownItems}
                    onChange={this.handleFormInputChange}
                    defaultValue={this.state.formData.age_id.value}
                    id="age_id"
                />
                <Dropdown
                    placeholder='Size'
                    fluid
                    className={classes.InputDropdowns}
                    selection
                    options={sizesDropdownItems}
                    onChange={this.handleFormInputChange}
                    value={this.state.formData.size_id.value}
                    id="size_id"
                />
                <Button
                    type="submit"
                    fluid
                    size='large'
                    color='blue'
                    disabled={submitDisabled}
                >Submit</Button>
            </Form>
        );
    }
}

const mapStateToProps = state => {
    return {
        dogFilter: state.dog.currentFilter,
        ages: state.dog.attributes.ages,
        breeds: state.dog.attributes.breeds,
        sizes: state.dog.attributes.sizes,
        currentUser: state.auth.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchFilterUpdate: (type, value) => dispatch(actions.updateParkFilter(type, value)),
        onFetchAttribute: (attribute) => dispatch(actions.fetchDogAttribute(attribute)),
        onDogFilterUpdate: (attribute, value) => dispatch(actions.updateDogFilter(attribute, value)),
        onFormReset: () => dispatch(actions.resetDogFilter()),
        addEditDog: (dog, action) => dispatch(actions.addEditDog(dog, action))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DogForm)