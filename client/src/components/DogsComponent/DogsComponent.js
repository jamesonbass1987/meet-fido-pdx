import React from 'react';
import { Segment, Divider, Header } from 'semantic-ui-react';
import Dogs from '../Dogs/Dogs';
import DogForm from '../DogsForm/DogsForm'
import dogFilter from '../../shared/dogFilter'

function dogsComponent(props) {

    const dogs = dogFilter(props.dogs, props.filterParams)

    return (
        <Segment>
            <Header 
                as='h3'
                textAlign='center'
            >Use the menu to search for the perfect furry friend!</Header>
            <DogForm />
            <Divider />
            <Dogs dogs={dogs} />
        </Segment>
    )
}

export default dogsComponent
