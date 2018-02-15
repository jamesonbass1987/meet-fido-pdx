import React from 'react';
import { Menu } from 'semantic-ui-react';
// import classes from './NavigationItems.css';


import NavigationItem from './NavigationItem/NavigationItem';
import Logo from '../../Logo/Logo'

const navigationItems = props => {
    return (
        <Menu
            stackable
            size="large" 
            position="right">
            <Logo height="50px" />
            <NavigationItem
                activeItem={props.activeItem} 
                name="home" 
                clicked={props.clicked}
                link="/"/>
            <NavigationItem
                activeItem={props.activeItem} 
                name="dogSearch"
                content="Find Dogs" 
                clicked={props.clicked}
                link="/dogs"/>
            <NavigationItem
                activeItem={props.activeItem} 
                content="Search Parks" 
                name="parkSearch" 
                clicked={props.clicked}
                link="/parks"/>
        </Menu>
    )
}

export default navigationItems; 
