import React from 'react';
import { Item, Icon, Popup } from 'semantic-ui-react'

import Park from './Park/Park'

import { parkFilter } from '../../shared/parkFilter'
import classes from './Parks.css'

const parks = props => {

    let parksArray;
    if(props.currentFilter){
        parksArray = parkFilter(props.parks, props.currentFilter);
    } else {
        parksArray = props.parks
    }

    let closeIcon;
    if (props.isProfileOwner){
        closeIcon = <Popup
            trigger={<Icon name="remove" onClick={props.removePark} size="large" color="red" className={classes.ParkCloseIcon} />}
            content="Remove park from my favorites."
            basic
        />
    }
    
    const parksList = parksArray.map(park => (
        <Park key={park.id} park={park} icon={closeIcon} />
    ))

    return (
        <Item.Group divided>
            {parksList}
        </Item.Group>
    );
};

export default parks;