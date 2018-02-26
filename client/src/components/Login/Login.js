import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleUserLogin } from '../../store/actions/index';
import { updateObject, checkValidity } from '../../shared/utility';

import { Button, Form, Grid, Header, Image, Segment, Input } from 'semantic-ui-react';

import classes from './Login.css'
import Icon from '../../assets/images/paw-print.png';


class LoginForm extends Component {

    state = {
        formData: {
            username: {
                value: '',
                validation: {
                    required: true,
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
            }
        }
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

    handleFormSubmit = () => {
        const username = this.state.formData.username.value;
        const password = this.state.formData.password.value;

        this.props.handleUserLogin({username, password})
    }

    render() {

        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p style={{color: "red", textTransform: 'capitalize'}}>{this.props.error.user_authentication}</p>
            );
        }

        let submitDisabled = Object.values(this.state.formData).some(inputField => !inputField.valid )


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
                            {errorMessage}
                            <Form.Field
                                fluid
                                icon='user'
                                iconPosition='left'
                                control={ Input }
                                placeholder='Username'
                                id='username'
                                value={this.state.username}
                                onChange={event => this.handleFormInputChange(event, 'username')}
                                className={this.state.formData.username.touched && !this.state.formData.username.valid ? classes.Invalid : null }
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

                            <Button disabled={submitDisabled} className={classes.LoginButton} fluid size='large'>Login</Button>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        );
    }

}
const mapStateToProps = (state) => {
    const { error } = state.auth
    return { error }
};


const mapDispatchToProps = dispatch => (
    bindActionCreators({ handleUserLogin }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)