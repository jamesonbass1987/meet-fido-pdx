import React from 'react'
import { Link } from 'react-router-dom';
import { MenuItem } from 'semantic-ui-react'

import classes from './NavigationItem.css'

const navigationItem = props => (
        <MenuItem
            as={ Link } 
            active={props.activeItem === props.link}
            to={props.link}
            content={props.content}
            name={props.name} 
            onClick={props.clicked}
            className={classes.NavigationItem}
            >
        </MenuItem>
)

export default navigationItem