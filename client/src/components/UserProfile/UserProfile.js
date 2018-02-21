import React from 'react';

import classes from './UserProfile.css';
import { Segment, Header } from 'semantic-ui-react';
import PageHeading from '../PageHeading/PageHeading';
import UserImage from '../UserImage/UserImage'

const userProfile = props => {
    console.log(props)
    return (
        <React.Fragment>
        <Segment>
                <UserImage size="medium" src={props.user.profile_image_url} />
                <Header as='h1' size="huge" textAlign="center">
                    <Header.Content>
                        {props.user.username}
                    </Header.Content>
                </Header>
        </Segment>  



        </React.Fragment>
    )
}

export default userProfile
