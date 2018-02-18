import React from 'react';
import { Button, Icon, Image, Popup, Item } from 'semantic-ui-react'

// TEMPORARY IMAGE
import DogImage from '../../../assets/images/dog.png';

const user = props => {
    console.log(props)

    let dogsPopup = props.user.dogs.map(dog => (
        <Popup
            key={dog.name + dog.id}
            trigger={<Image src={DogImage} avatar />}
            header={dog.name}
            content={dog.description}
        />
    ))

    return (
        <Item>
            <Item.Image src={props.user.profile_image_url} />
            <Item.Content verticalAlign='middle'>
                <Item.Header as='a'>{props.user.username}</Item.Header>
                <Item.Meta>
                    <span>{props.user.neighborhood.name}</span>
                </Item.Meta>
                <Item.Description>User Description</Item.Description>
                <Item.Extra>
                    <strong>My favorite parks:</strong>{dogsPopup}<br />
                    <strong>My dogs:</strong>{dogsPopup}
                </Item.Extra>
            </Item.Content>
        </Item>
    );
};

export default user;