import React from 'react'

import { Card } from 'semantic-ui-react'
import Dog from './Dog/Dog'
import Spinner from '../UI/Spinner/Spinner'

const uuidv1 = require('uuid/v1');

function dogs(props) {

    let dogs = <Spinner />

    if (!props.loading) {
        const dogNodeList = props.dogs.map(dog => (
            <Dog key={uuidv1()} dog={dog} />
        ))

        dogs = <Card.Group 
            itemsPerRow={4}
            doubling
        >{dogNodeList}</Card.Group>
    }

    return dogs
}

export default dogs
