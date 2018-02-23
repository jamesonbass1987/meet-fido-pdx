import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

import classes from './Dog.css'

const dog = props => {

    const ownerInfo = props.dog.user ? (
                                        <Card.Content extra>                                    
                                            <Link 
                                                to={`/users/${props.dog.user.id}`}
                                            >
                                                <Icon name='user' /> Owner: {props.dog.user.username}
                                            </Link>
                                        </Card.Content>) : 
                                        null

    return (
        <Card id={props.id} className={classes.Dog}>
            <Image centered src={props.dog.profile_image_url} />
            <Card.Content>
                <Card.Header>{props.dog.name}</Card.Header>
                <Card.Meta>{props.dog.breed.name} | {props.dog.age.name} | {props.dog.size.name} </Card.Meta>
                <Card.Description>
                    <p>{props.dog.description}</p>
                </Card.Description>
            </Card.Content>
            {ownerInfo}
        </Card>
    );
};

export default dog;