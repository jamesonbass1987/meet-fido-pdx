import React from 'react';

import { Segment, Divider, Header } from 'semantic-ui-react';
import UserHeader from '../UI/Header/Header';
import UserImage from '../UserImage/UserImage';
import classes from './UserProfileHeader.css';

const userProfileHeader = props => (
    <Segment className={classes.ProfileHeaderSection}>
        <UserImage src={props.user.profile_image_url} />
        <Divider />
        <UserHeader 
            className={classes.ProfileHeader} 
            as='h1' 
            size="huge" 
            textAlign="center" 
            content={props.user.username}
        >
            <Header.Subheader 
                content={props.user.neighborhood.name} 
            />
            <Header.Subheader 
                className={classes.ProfileSubHeader}
                content={props.user.bio}
            />
        </UserHeader>
    </Segment>
);

export default userProfileHeader;