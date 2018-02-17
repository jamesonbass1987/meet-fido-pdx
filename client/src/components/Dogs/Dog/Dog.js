import React from 'react';
import { Card, Icon, Image, Popup } from 'semantic-ui-react';

import DogImage from '../../../assets/images/dog.png'

const dog = props => {

    let icon;
    if (props.dog.preferred_park){
        icon = <Popup 
                trigger={<Icon
                    color="green"
                    corner
                    size="small"
                    name="tree"
                    position="top right"
                />}
                content={`My favorite park is ${props.dog.preferred_park.name}!`}
                />
    }

    return (
        <Card id={props.id}>
            <Image src={DogImage} />
            <Card.Content>
                <Card.Header>{props.dog.name} {icon}</Card.Header>
                <Card.Meta>{props.dog.breed.name} | {props.dog.age.name} | {props.dog.size.name} </Card.Meta>
                <Card.Description>
                    <p>{props.dog.description}</p>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='user' />
                    Owner: {props.dog.user.username}
                </a>
            </Card.Content>
        </Card>
    );
};

export default dog;