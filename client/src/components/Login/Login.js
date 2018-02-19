import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

import classes from './Login.css'
import Icon from '../../assets/images/paw-print.png';
import DogParkVideo from '../../assets/videos/dog-park-homepage.mp4'


class LoginForm extends Component {

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
                    className={classes.LoginForm}
                    verticalAlign='middle'
                >
                    <Grid.Column className={classes.LoginGridColumn}>
                        <Header as='h2' className={classes.LoginHeading} textAlign='center'>
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
                                    icon='email'
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

                                <Button className={classes.LoginButton} fluid size='large'>Sign Up</Button>
                            </Segment>
                        </Form>
                        <Message>
                            Already have an account? <Button>Login</Button>
                        </Message>
                    </Grid.Column>
                </Grid>
        );
    }
}

export default LoginForm;