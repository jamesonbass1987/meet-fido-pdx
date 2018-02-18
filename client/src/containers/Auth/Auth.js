import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

import classes from './Auth.css'
import Icon from '../../assets/images/paw-print.png';
import DogParkVideo from '../../assets/videos/dog-park-homepage.mp4'


class Auth extends Component {

    state = {
        isSignUp: true
    }

    render() {
        return (
            <div className={[classes.AuthForm, classes.AuthParentDiv].join(' ')}>
                <video className={classes.BackgroundVideo} id="background-video" loop autoPlay>
                    <source src={DogParkVideo}
                        type="video/mp4" />
                </video>
                <Grid
                    textAlign='center'
                    className={classes.AuthForm}
                    verticalAlign='middle'
                >
                    <Grid.Column className={classes.AuthGridColumn}>
                        <Header as='h2' className={classes.AuthHeading} textAlign='center'>
                            <Image src={Icon} />
                            {' '}Log-in to your account
                        </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input
                                    fluid
                                    icon='user'
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

                                <Button className={classes.AuthButton} fluid size='large'>Login</Button>
                            </Segment>
                        </Form>
                        <Message>
                            New to us? <Button>Signup</Button>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default Auth;