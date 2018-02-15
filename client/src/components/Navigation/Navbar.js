import React, { Component } from 'react';
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
            <div>
                <NavigationItems 
                    activeItem={this.state.activeItem} 
                    clicked={ this.handleItemClick }/>
            </div>
        );
    }
}

export default Navbar;