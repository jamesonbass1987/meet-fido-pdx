import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react';

import classes from './Login.css'
import Icon from '../../assets/images/paw-print.png';


class LoginForm extends Component {

    state = {
        controls: {
            username: '',
            password: ''
        }
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
                className={classes.LoginForm}
                verticalAlign='middle'
            >
                <Grid.Column className={classes.LoginGridColumn}>
                    <Header as='h2' className={classes.LoginHeading} textAlign='center'>
                        <Image src={Icon} />
                        {' '}Log-in to your account
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
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                value={this.state.password}
                                onChange={event => this.handleFormInputChange(event, 'password')}
                            />

                            <Button className={classes.LoginButton} fluid size='large'>Login</Button>
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

export default connect(null, mapDispatchToProps)(LoginForm)