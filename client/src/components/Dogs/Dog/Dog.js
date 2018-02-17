import React from 'react';
import { Card, Icon, Image, Popup } from 'semantic-ui-react';

import DogImage from '../../../assets/images/dog.png'

const dog = props => {

    let icon;

    if (props.dog.preferred_park){
        icon = <Popup 
                trigger={<Icon
                    color="yellow"
                    corner
                    size="small"
                />}
                content="I have a favorite park!"
                />
        
    }

    console.log(props)
    return (
        <Card id={props.id}>
            <Image src={DogImage} />
            <Card.Content>
                <Card.Header>{props.dog.name}</Card.Header>
                {icon}
                <Card.Meta>{props.dog.breed.name} | {props.dog.age.name} | {props.dog.size.name} </Card.Meta>
                <Card.Description>
                    <p>{props.dog.description}</p>
                </Card.Description>
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