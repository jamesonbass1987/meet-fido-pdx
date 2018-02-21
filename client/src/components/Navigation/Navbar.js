import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleLogout, updateSignUpState, updateAuthenticatingState, checkCurrentUser } from '../../store/actions/index';

import { Menu } from 'semantic-ui-react'
import NavigationItems from './NavigationItems/NavigationItems'

class Navbar extends Component {

    state = {
        activeItem: ''
    }

    componentWillMount(){
        this.setActiveItem();
        if (this.props.isAuthenticated && !this.props.currentUserId){
            this.props.checkCurrentUser()
        }
    }


    handleItemClick = (event, { to } ) => {
        this.setState({
            activeItem: to
        })
    }

    setActiveItem = () => (
        this.setState({
            activeItem: window.location.pathname
        })
    )

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
                        as: 'a',
                        href: '/logout'
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
                        link: `/users/${this.props.currentUserId}`,
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
        currentUserId: state.auth.currentUserId
    };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ handleLogout, updateSignUpState, updateAuthenticatingState, checkCurrentUser }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);