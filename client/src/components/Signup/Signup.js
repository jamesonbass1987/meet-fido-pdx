import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

import classes from './Signup.css'
import Icon from '../../assets/images/paw-print.png';

class SignUpForm extends Component {

    state = {
        email: '',
        username: '',
        password: '',
        password_confirmation: ''
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
                            />
                            <Form.Input
                                fluid
                                icon='mail'
                                iconPosition='left'
                                placeholder='E-mail address'
                            />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                            />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password Confirmation'
                                type='password'
                            />

                            <Button className={classes.SignUpButton} fluid size='large'>Sign Up</Button>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    swapAuthSignUpStates: () => dispatch(actions.swapAuthSignUpStates())
})

export default connect(null, mapDispatchToProps)(SignUpForm)