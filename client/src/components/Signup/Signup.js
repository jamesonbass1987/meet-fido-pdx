import React, { Component } from 'react';

class SignupForm extends Component {
    state = {
        username: '',
        password: ''
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
                                placeholder='E-mail address'
                            />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                            />

                            <Button className={classes.LoginButton} fluid size='large'>Login</Button>
                        </Segment>
                    </Form>
                    <Message>
                        New to us? <Button>Signup</Button>
                    </Message>
                </Grid.Column>
            </Grid>
        );
    }
}

export default SignupForm;