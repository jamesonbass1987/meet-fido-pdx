import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleUserLogin } from '../../store/actions/index';

import { Button, Form, Grid, Header, Image, Segment, Input } from 'semantic-ui-react';

import classes from './Login.css'
import Icon from '../../assets/images/paw-print.png';


class LoginForm extends Component {

    state = {
        formData: {
            username: '',
            password: ''
        }
    }

    handleFormInputChange = (event, key) => {
        this.setState({
            formData: {
                ...this.state.formData,
                [key]: event.target.value
            }
        })
    }

    handleFormSubmit = () => {
        const username = this.state.formData.username;
        const password = this.state.formData.password;

        this.props.handleUserLogin({username, password})
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
                    <Form size='large' onSubmit={() => this.handleFormSubmit()}>
                        <Segment stacked>
                            <Form.Field
                                fluid
                                icon='user'
                                iconPosition='left'
                                control={ Input }
                                placeholder='Username'
                                id='username'
                                value={this.state.username}
                                onChange={event => this.handleFormInputChange(event, 'username')}
                            />
                            <Form.Field
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                control={Input}
                                id='password'
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

const mapDispatchToProps = dispatch => (
    bindActionCreators({ handleUserLogin }, dispatch)
)

export default connect(null, mapDispatchToProps)(LoginForm)