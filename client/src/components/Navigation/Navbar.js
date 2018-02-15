import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'

import NavigationItems from './NavigationItems/NavigationItems'

class Navbar extends Component {

    state = {
        activeItem: 'home'
    }

    handleItemClick = (event, { name } ) => {
        this.setState({
            ...this.state,
            activeItem: name
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