import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import { Container } from 'semantic-ui-react';

import classes from './Home.css';

import LoginForm from '../../components/Login/Login';
import SignupForm from '../../components/Signup/Signup';
import Modal from '../../components/UI/Modal/Modal';
import MainHeading from '../../components/MainHeading/MainHeading';

import DogParkVideo from '../../assets/videos/dog-park-homepage.mp4';

const home = props => {

        let headingContent = <MainHeading />; 

        if (props.isSigningUp) {

            headingContent = <Modal
                show={props.isSigningUp}
                handleClose={props.changeSignUpState}
                basic
            >
                <SignupForm />
            </Modal>
        }

        if (props.isAuthenticating){
            console.log('show login form')
            headingContent =  <Modal 
                                show={props.isAuthenticating}
                                handleClose={props.changeAuthState}
                                basic
                                >
                                <LoginForm />
                            </Modal>
        }

        return (
            <Container text className={classes.Heading}>
                <video className={classes.BackgroundVideo} id="background-video" loop autoPlay>
                    <source src={DogParkVideo}
                        type="video/mp4" />
                </video>
                <div className={classes.BackgroundOverlay} />
                {headingContent}
            </Container>

        );
}

const mapStateToProps = state => ({
    isAuthenticating: state.auth.isAuthenticating,
    isSigningUp: state.auth.isSigningUp
})

const mapDispatchToProps = dispatch => ({
    changeAuthState: () => dispatch(actions.updateAuthenticatingState()),
    changeSignUpState: () => dispatch(actions.updateSignUpState())
})

export default connect(mapStateToProps, mapDispatchToProps)(home)