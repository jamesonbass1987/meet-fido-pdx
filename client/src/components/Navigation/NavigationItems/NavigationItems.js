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
            <MenuItem position='right'>
                <Button color="google plus" as='a' >Log in</Button>
                <Button color="twitter" as='a' style={{ marginLeft: '0.5em' }}>Sign Up</Button>
            </MenuItem>
        </Menu>
    )
}

export default navigationItems; 
