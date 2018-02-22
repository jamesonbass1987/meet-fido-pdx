import React from 'react';
import { Item } from 'semantic-ui-react'

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


    
    const parksList = parksArray.map(park => (
        <Park key={park.id} park={park} removePark={props.removePark} isProfileOwner={props.isProfileOwner} />
    ))

    return (
        <Item.Group divided>
            {parksList}
        </Item.Group>
    );
};

export default parks;