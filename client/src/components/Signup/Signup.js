import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react';
import { handleUserSignUp } from '../../store/actions/index';
import { connect } from 'react-redux';

import classes from './Signup.css'
import Icon from '../../assets/images/paw-print.png';

class SignUpForm extends Component {

    state = {
        controls: {
            email: '',
            username: '',
            password: '',
            password_confirmation: ''
        }
    }

    componentWillMount(){

    }

    handleFormInputChange = (event, key) => {
        const updatedControls = {
            ...this.state.controls,
            [key]: event.target.value
        }

        this.setState({
            controls: {
                ...this.state.controls,
                updatedControls
            }
        })
    }

    render() {
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
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input
                                fluid
                                icon='user'
                                iconPosition='left'
                                placeholder='Username'
                                value={this.state.username}
                                onChange={event => this.handleFormInputChange(event, 'username')}
                            />
                            <Form.Input
                                fluid
                                icon='mail'
                                iconPosition='left'
                                placeholder='E-mail address'
                                value={this.state.email}
                                onChange={event => this.handleFormInputChange(event, 'email')}
                            />
                            <Form.Input
                                fluid
                                icon='lock'
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
                                placeholder='Password Confirmation'
                                type='password'
                                value={this.state.password_confirmation}
                                onChange={event => this.handleFormInputChange(event, 'password_confirmation')}
                            />

                            <Button className={classes.SignUpButton} fluid size='large'>Sign Up</Button>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    neighborhoods: this.neighborhood.neighborhoods
})


const mapDispatchToProps = dispatch => (
    bindActionCreators({ handleUserSignUp }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)