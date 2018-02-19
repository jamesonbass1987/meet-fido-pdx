import React from 'react';
import { Menu, MenuItem, Button } from 'semantic-ui-react';
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
                <Button onClick={props.changeAuthState} color="google plus" className={classes.MenuButton}>Log in</Button>
                <Button onClick={props.changeSignUpState} color="twitter" className={classes.MenuButton}>Sign Up</Button>
                <Button onClick={props.handleLogout} color="red" className={classes.MenuButton}>Logout</Button>

            </MenuItem>
        </Menu>
    )
}

export default navigationItems
