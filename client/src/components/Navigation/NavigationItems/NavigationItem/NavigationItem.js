import React from 'react'
import { NavLink } from 'react-router-dom';
import { MenuItem } from 'semantic-ui-react'

import classes from './NavigationItem.css'

const navigationItem = props => (
        <MenuItem 
            active={props.activeItem === props.name} 
            name={props.name} 
            onClick={props.clicked}
            link={true}
            className={classes.NavigationItem}
            >
            <NavLink
                to={props.link}
                exact={props.exact}
                >
                {props.children}
            </NavLink>
        </MenuItem>
)

export default navigationItem