import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Segment, List } from 'semantic-ui-react';
import { handleUserSignUp, fetchNeighborhoods } from '../../store/actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateObject, checkValidity } from '../../shared/utility';


import classes from './Signup.css'
import Icon from '../../assets/images/paw-print.png';

class SignUpForm extends Component {

    state = {
        formData: {
            username: {
                value: '',
                validation: {
                    required: true,
                    minLength: 5
                },
                valid: false,
                touched: false
            },
            email: {
                value: '',
                validation: {
                    required: true,
                    minLength: 6
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
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
            password_confirmation: {
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        }
    }

    componentWillMount(){
        this.props.fetchNeighborhoods()
    }

    handleFormInputChange = (event, key) => {
        const updatedFormData = updateObject(this.state.formData, {
            [key]: updateObject(this.state.formData[key], {
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state.formData[key].validation),
                touched: true
            })
        });
        this.setState({ formData: updatedFormData })
    }

    handleFormDropdownChange = (event, { value }) => {
        const updatedFormData = updateObject(this.state.formData, {
            neighborhood_id: updateObject(this.state.formData.neighborhood_id, {
                value,
                valid: checkValidity(value, this.state.formData.neighborhood_id.validation),
                touched: true
            })
        });

        this.setState({ formData: updatedFormData })
    }

    handleFormSubmission( event ) {
        const userInfo = {
            username: this.state.formData.username.value,
            password: this.state.formData.password.value,
            password_confirmation: this.state.formData.password_confirmation.value,
            email: this.state.formData.email.value,
            neighborhood_id: this.state.formData.neighborhood_id.value
        }

        this.props.handleUserSignUp(userInfo);
    }

    render() {

        let errorMessage = null;
        if (this.props.error) {
            const formErrors = this.props.error.map(error => <List.Item content={error} />)

            errorMessage = (
                <List style={{ color: "red", textTransform: 'capitalize' }}>{formErrors}</List>
            );
        }

        const submitDisabled = Object.values(this.state.formData).some(inputField => !inputField.valid)

        const dropdownItems = this.props.neighborhoods.map(neighborhood => {
            return {
                text: neighborhood.name,
                value: neighborhood.id,
                key: neighborhood.name + neighborhood.id
            }
        })
        
        return (
            <Grid
                textAlign='center'
                className={classes.SignUpForm}
                verticalAlign='middle'
            >
                <Grid.Column className={classes.SignUpGridColumn}>
                    <Header as='h2' className={classes.SignUpHeading} textAlign='center'>
                        <Image src={Icon} />
                        {' '}Sign up for a new account
                        </Header>
                    <Form onSubmit={() => this.handleFormSubmission()} size='large'>
                        <Segment stacked>
                            {errorMessage}
                            <Form.Input
                                fluid
                                icon='user'
                                iconPosition='left'
                                placeholder='Username'
                                id='username'
                                value={this.state.username}
                                onChange={event => this.handleFormInputChange(event, 'username')}
                            />
                            <Form.Input
                                fluid
                                icon='mail'
                                id='email'
                                iconPosition='left'
                                placeholder='E-mail address'
                                value={this.state.email}
                                onChange={event => this.handleFormInputChange(event, 'email')}
                            />
                            <Form.Input
                                fluid
                                icon='lock'
                                id='password'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                value={this.state.password}
                                onChange={event => this.handleFormInputChange(event, 'password')}
                            />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                id='password_confirmation'
                                placeholder='Password Confirmation'
                                type='password'
                                value={this.state.password_confirmation}
                                onChange={event => this.handleFormInputChange(event, 'password_confirmation')}
                            />
                            <Form.Dropdown 
                                placeholder='Select your neighborhood...'
                                fluid
                                selection
                                id='neighborhood'
                                options={dropdownItems}
                                onChange={this.handleFormDropdownChange}
                            />
                            <Button disabled={submitDisabled} type="submit" className={classes.SignUpButton} fluid size='large'>Sign Up</Button>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    neighborhoods: state.neighborhood.neighborhoods,
    error: state.auth.error
})


const mapDispatchToProps = dispatch => (
    bindActionCreators({ handleUserSignUp, fetchNeighborhoods }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)