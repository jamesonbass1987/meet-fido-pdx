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
            <Logo height="50px"/>
            <NavigationItem
                activeItem={props.activeItem} 
                name="home" 
                clicked={props.clicked}
                link="/">Home</NavigationItem>
            <NavigationItem
                activeItem={props.activeItem} 
                name="dogSearch" 
                clicked={props.clicked}
                link="/dogs">Search Dogs</NavigationItem>
            <NavigationItem
                activeItem={props.activeItem} 
                name="parkSearch" 
                clicked={props.clicked}
                link="parks">Find A Park</NavigationItem>
        </Menu>
    )
}

export default navigationItems; 
