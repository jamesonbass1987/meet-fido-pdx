import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { handleLogout, updateSignUpState, updateAuthenticatingState, fetchCurrentUser } from '../../store/actions/index';

import { Menu } from 'semantic-ui-react'
import NavigationItems from './NavigationItems/NavigationItems'

class Navbar extends Component {

    state = {
        activeItem: window.location.pathname
    }

    componentWillMount() {
        const token = localStorage.getItem('token')
        if (token && !this.props.currentUser) {
            this.props.fetchCurrentUser();
        }
    }

    componentWillReceiveProps(nextProps){
        const token = localStorage.getItem('token')

        if (token && !this.props.currentUser) {
            this.props.fetchCurrentUser();
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        return this.props.currentUser !== nextProps.currentUser || this.state.activeItem !== nextState.activeItem
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


        if (this.props.isAuthenticated && !this.props.loading) {
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
                        link: `/users/${this.props.currentUser.id}`,
                    }
                ]
        }

        let navItems = <NavigationItems
                navLinks={navLinks}
                navButtons={navButtons}
                activeItem={this.state.activeItem}
                clicked={this.handleItemClick}
            />

        return (
            <Menu stackable>
                {navItems}
            </Menu>
        );
    }
}


const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token,
        currentUser: state.auth.currentUser,
        loading: state.auth.loading
    };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ handleLogout, updateSignUpState, updateAuthenticatingState, fetchCurrentUser }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);