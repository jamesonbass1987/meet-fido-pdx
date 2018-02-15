import React from 'react'
import { Link } from 'react-router-dom';
import { MenuItem } from 'semantic-ui-react'

import classes from './NavigationItem.css'

const navigationItem = props => (
        <MenuItem
            as={ Link } 
            to={props.link}
            content={props.content}
            active={props.activeItem === props.name} 
            name={props.name} 
            onClick={props.clicked}
            className={classes.NavigationItem}
            >
        </MenuItem>
)

export default navigationItem