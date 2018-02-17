import React from 'react'

import { Card } from 'semantic-ui-react'
import Dog from './Dog/Dog'
import Spinner from '../UI/Spinner/Spinner'

function dogs(props) {

    let dogs = <Spinner />

    if (!props.loading) {
        const dogNodeList = props.dogs.map(dog => (
            <Dog key={dog.id} dog={dog} />
        ))

        dogs = <Card.Group itemsPerRow={4} celled>{dogNodeList}</Card.Group>
    }

    return dogs
}

export default dogs
