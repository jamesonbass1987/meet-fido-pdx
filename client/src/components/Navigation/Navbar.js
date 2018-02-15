import React, { Component } from 'react';
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
                    clicked={ this.handleItemClick }/>
            </Menu>
        );
    }
}

export default Navbar;