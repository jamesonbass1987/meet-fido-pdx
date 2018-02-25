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
            age: {
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
            breed: {
                value: '',
                validation: {
                    requiredDropdown: true,
                },
                valid: false,
                touched: false
            }, 
            size: {
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
            },
        }
    }

    componentWillMount() {
        if (this.props.breeds.length === 0) {
            this.props.onFetchAttribute("ages")
            this.props.onFetchAttribute("breeds")
            this.props.onFetchAttribute("sizes")
        }
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
        const { name, image_url, description, sex, size, age, breed } = this.state.formData
        const dogInfo = {
            name: name.value,
            description: description.value,
            image_url: image_url.value,
            sex: sex.value,
            size: size.value,
            age: age.value,
            breed: breed.value
        }

        this.props.updateCurrentUser(this.props.user, 'addEditDog', dogInfo);
        this.props.toggleModal();
    }

    render() {

        const breedsDropdownItems = this.props.breeds.map((breed, i) => {
            return {
                text: breed,
                value: breed,
                key: i + breed
            }
        })

        const sizesDropdownItems = this.props.sizes.map((size, i) => {
            return {
                text: size,
                value: size,
                key: i + size
            }
        })

        const agesDropdownItems = this.props.ages.map((age, i) => {
            return {
                value: age,
                text: age,
                key: i + age
            }
        })

        const sexesDropdownItems = [
                                {value: 'Male', text: 'Male'}, 
                                {value: 'Female', text: 'Female'}
                            ]

        const submitDisabled = Object.values(this.state.formData).some(inputField => !inputField.valid)
        
        return (
            <Form className={classes.DogForm} onSubmit={() => this.handleFormSubmission()}>
                <Header as='h1'>{this.props.headerTitle}</Header>
                <Form.Field
                    control={Input}
                    id="name"
                    type="text"
                    label='Name:'
                    onChange={this.handleFormInputChange}
                    placeholder='Enter your dogs name...' />
                <Form.Field
                    control={Input}
                    id="profile_image_url"
                    type="text"
                    label='Image URL:'
                    onChange={this.handleFormInputChange}
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
                    defaultValue={this.state.formData.breed.value}
                    id='breed'
                />
                <Dropdown
                    placeholder='Age'
                    fluid
                    className={classes.InputDropdowns}
                    selection
                    options={agesDropdownItems}
                    onChange={this.handleFormInputChange}
                    defaultValue={this.state.formData.age.value}
                    id="age"
                />
                <Dropdown
                    placeholder='Size'
                    fluid
                    className={classes.InputDropdowns}
                    selection
                    options={sizesDropdownItems}
                    onChange={this.handleFormInputChange}
                    value={this.state.formData.size.value}
                    id="size"
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
        sizes: state.dog.attributes.sizes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchFilterUpdate: (type, value) => dispatch(actions.updateParkFilter(type, value)),
        onFetchAttribute: (attribute) => dispatch(actions.fetchDogAttribute(attribute)),
        onDogFilterUpdate: (attribute, value) => dispatch(actions.updateDogFilter(attribute, value)),
        onFormReset: () => dispatch(actions.resetDogFilter())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DogForm)