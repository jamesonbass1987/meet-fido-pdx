import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import { Menu } from 'semantic-ui-react'
import NavigationItems from './NavigationItems/NavigationItems'

class Navbar extends Component {

    state = {
        activeItem: window.location.pathname
    }

    handleItemClick = (event, { to } ) => {
        this.setState({
            ...this.state,
            activeItem: to
        })
    }

    render() {
        return (
            <Menu stackable>
                <NavigationItems 
                    activeItem={this.state.activeItem} 
                    clicked={ this.handleItemClick }
                    changeAuthState={this.props.updateAuthenticatingState}
                    changeSignUpState={this.props.updateSignUpState}
                    handleLogout={this.props.handleLogout}
                    />
            </Menu>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateAuthenticatingState: () => dispatch(actions.updateAuthenticatingState()),
    updateSignUpState: () => dispatch(actions.updateSignUpState()),
    handleLogout: () => dispatch(actions.handleLogout())
})


export default connect(null, mapDispatchToProps)(Navbar)
