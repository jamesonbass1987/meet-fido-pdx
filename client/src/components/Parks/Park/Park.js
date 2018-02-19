import React from 'react';
import { Image, Item } from 'semantic-ui-react';
import classes from './Park.css';

const park = props => {
    const isFenced = props.park.fenced ? "Fenced" : "Open Off Leash Area"
    const parkAddress = !props.park.address_2 ? `${props.park.address_1}` : `${props.park.address_1} and ${props.park.address_2}`    

    const hours = `${props.park.hours_open} A.M. to ${props.park.hours_close}`

    return (
        <Item className={classes.Content}>
            <Image className={classes.ParkImage} rounded src={props.park.image_url} />
            <Item.Content verticalAlign='middle'>
                <Item.Header>{props.park.name}</Item.Header>
                <Item.Meta>
                    <span>{parkAddress}</span>
                </Item.Meta>
                <Item.Description>{props.park.description}</Item.Description>
                <Item.Extra>
                    <strong>{isFenced}</strong><br />
                    <strong>Hours:</strong>{hours}
                </Item.Extra>
            </Item.Content>
        </Item>
    );
};

export default park;

