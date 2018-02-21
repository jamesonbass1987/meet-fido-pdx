import React from 'react';
import { Item } from 'semantic-ui-react'

import Park from './Park/Park'

import { parkFilter } from '../../shared/parkFilter'

const parks = props => {

    const parksArray = parkFilter(props.parks, props.currentFilter);
    
    const parksList = parksArray.map(park => (
        <Park key={park.id} park={park} />
    ))

    return (
        <Item.Group divided>
            {parksList}
        </Item.Group>
    );
};

export default parks;