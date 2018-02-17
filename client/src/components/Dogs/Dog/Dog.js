import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

import DogImage from '../../../assets/images/dog.png'

const dog = props => {
    console.log(props)
    return (
        <Card id={props.id}>
            <Image src={DogImage} />
            <Card.Content>
                <Card.Header>{props.dog.name}</Card.Header>
                <Card.Meta>{props.dog.breed.name} | {props.dog.age.name}</Card.Meta>
                <Card.Description>{props.dog.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='user' />
                    10 Friends
                </a>
            </Card.Content>
        </Card>
    );
};

export default dog;