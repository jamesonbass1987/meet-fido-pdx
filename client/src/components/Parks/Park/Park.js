import React from 'react';
import { Grid, Image, Item } from 'semantic-ui-react';
import classes from './Park.css';

const park = props => {
    const isFenced = props.park.fenced ? "Fenced" : "Open Off Leash Area"
    const parkAddress = !props.park.address_2 ? `${props.park.address_1}` : `${props.park.address_1} and ${props.park.address_2}`    

    const hours = `${props.park.hours_open} A.M. to ${props.park.hours_close}`

    return (
        <Grid.Row className={classes.Content}>
            <Grid.Column verticalAlign="middle" width={4}>
                <Image rounded src={props.park.image_url} />
            </Grid.Column>
            <Grid.Column 
                width={12}
                >
                <h3>{props.park.name}</h3>
                <h4>About The Park:</h4>
                <p>{props.park.description}</p>
                <h4>Address:</h4>
                <p>{parkAddress}</p>
                <h4><em>{isFenced}</em></h4>
                <p><strong>Park Hours: </strong>{hours}</p>
            </Grid.Column>
        </Grid.Row>
    );
};

export default park;