import React from 'react'
import { MenuItem } from 'semantic-ui-react'

import classes from './NavigationItem.css'

const navigationItem = props => (
        <MenuItem 
            active={props.activeItem === props.name} 
            name={props.name} 
            onClick={props.clicked}
            link={props.link}
            >
            {props.children}
        </MenuItem>
)

export default navigationItem