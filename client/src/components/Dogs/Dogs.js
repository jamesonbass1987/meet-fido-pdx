import React from 'react'

import { Card } from 'semantic-ui-react'
import Dog from './Dog/Dog'
import Spinner from '../UI/Spinner/Spinner'


const dogs = props => {

    let dogs = <Spinner />
    
    if (!props.loading) {
        const dogNodeList = props.dogs.map(dog => (
            <Dog isEditable={props.isEditable} key={dog.name + dog.id} dog={dog} />
        ))
        
        dogs = <Card.Group 
            itemsPerRow={4}
            doubling
        >{dogNodeList}</Card.Group>
    }

    return dogs
}

export default dogs
