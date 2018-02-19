import React from 'react';
import { Item } from 'semantic-ui-react'

import Park from './Park/Park'
import Spinner from '../UI/Spinner/Spinner'

import { parkFilter } from '../../shared/parkFilter'

const parks = props => {

    let parksList = <Spinner />

    if (!props.loading) {
        const parksArray = parkFilter(props.parks, props.currentFilter);
        parksList = parksArray.map(park => (
            <Park key={park.id} park={park} />
        ))
    }

    return (
        <Item.Group divided>
            {parksList}
        </Item.Group>
    );
};

export default parks;