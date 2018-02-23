import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { handleLogout, updateSignUpState, updateAuthenticatingState } from '../../store/actions/index';

import { Menu } from 'semantic-ui-react'
import NavigationItems from './NavigationItems/NavigationItems'

class Navbar extends Component {

    state = {
        activeItem: window.location.pathname
    }

    handleItemClick = (event, { to } ) => {
        this.setState({
            activeItem: to
        })
    }

    render() {
        let navLinks = []

        let navButtons = [
            {
                color: 'red',
                content: 'Log In',
                clicked: this.props.updateAuthenticatingState
            },
            {
                color: 'twitter',
                content: 'Sign Up',
                clicked: this.props.updateSignUpState
            }
        ]


        if (this.props.isAuthenticated) {
            navButtons = [
                    {
                        color: 'red',
                        content: 'Log Out',
                        as: Link,
                        to: '/logout'
                    }
                ]
            navLinks = [
                     {
                        name: 'home',
                        link: '/',
                        content: 'Home',
                    },
                    {
                        name: 'dogSearch',
                        content: 'Find Dogs',
                        link: '/dogs',
                    },
                    {
                        name: 'parkSearch',
                        content: 'Search Parks',
                        link: '/parks',
                    },
                    {
                        name: 'userSearch',
                        content: 'View Users',
                        link: "/users",
                    },
                    {
                        name: 'myProfile',
                        content: 'My Profile',
                        link: `/users/me`,
                    }
                ]
        }

        return (
            <Menu stackable>
                <NavigationItems 
                    navLinks={navLinks}
                    navButtons={navButtons}
                    activeItem={this.state.activeItem}
                    clicked={this.handleItemClick}
                    />
            </Menu>
        );
    }
}


const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token,
        currentUser: state.user.currentUser
    };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ handleLogout, updateSignUpState, updateAuthenticatingState }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);