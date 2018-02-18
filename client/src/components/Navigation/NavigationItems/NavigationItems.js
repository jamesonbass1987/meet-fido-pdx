import React from 'react';
import { Menu, MenuItem, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import classes from './NavigationItems.css';


import NavigationItem from './NavigationItem/NavigationItem';
import Logo from '../../Logo/Logo'

const navigationItems = props => {
    return (
        <Menu
            stackable
            size="large" 
            position="right"
            className={classes.Menu}
            >
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
            <NavigationItem
                activeItem={props.activeItem}
                content="View Users"
                name="userSearch"
                clicked={props.clicked}
                link="/users" />
            <MenuItem position='right'>
                <Button as={ Link } color="google plus" to="/auth">Log in</Button>
                <Button as={ Link } color="twitter" to="/auth">Sign Up</Button>
            </MenuItem>
        </Menu>
    )
}

export default navigationItems; 
