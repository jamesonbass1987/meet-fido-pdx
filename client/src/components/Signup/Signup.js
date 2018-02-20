import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react';
import { handleUserSignUp, fetchNeighborhoods } from '../../store/actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import classes from './Signup.css'
import Icon from '../../assets/images/paw-print.png';

class SignUpForm extends Component {

    state = {
        formData: {
            email: '',
            username: '',
            password: '',
            password_confirmation: '',
            neighborhood_id: null
        }
    }

    componentWillMount(){
        this.props.fetchNeighborhoods()
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
        this.setState({
            formData: {
                ...this.state.formData,
                neighborhood_id: value
            }
        })
    }

    handleFormSubmission( event ) {
        const userInfo = {
            username: this.state.formData.username,
            password: this.state.formData.password,
            password_confirmation: this.state.formData.password_confirmation,
            email: this.state.formData.email,
            neighborhood_id: this.state.formData.neighborhood_id
        }

        this.props.handleUserSignUp(userInfo);
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
                            <Button type="submit" className={classes.SignUpButton} fluid size='large'>Sign Up</Button>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    neighborhoods: state.neighborhood.neighborhoods
})


const mapDispatchToProps = dispatch => (
    bindActionCreators({ handleUserSignUp, fetchNeighborhoods }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)