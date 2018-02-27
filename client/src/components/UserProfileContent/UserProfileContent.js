import React from 'react';

import { Segment, Divider, Popup, Button } from 'semantic-ui-react';

import Dogs from '../Dogs/Dogs';
import Parks from '../Parks/Parks';

import Header from '../UI/Header/Header';

import classes from './UserProfileContent.css';

const userProfileContent = props => (
    <Segment>
        <Header as='h2' size="huge" content='My Dogs:' />
        <Popup
            trigger={<Button 
                        color="blue" 
                        className={classes.CreateDogBtn} 
                        onClick={() => props.handleModalToggle('dogForm')} 
                        icon='add' 
                    />}
            content="Add a new dog to your account."
            size="small"
        />
        <Dogs isEditable dogs={props.user.dogs} />
        <Divider />
        <Header as='h2' size="huge" content="Parks I Like:" />
        <Parks parks={props.user.parks} />
    </Segment>  
);

export default userProfileContent;