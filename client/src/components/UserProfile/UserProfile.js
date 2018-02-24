import React from 'react';

import classes from './UserProfile.css';
import { Segment, Header, Divider } from 'semantic-ui-react';
import UserImage from '../UserImage/UserImage';
import Dogs from '../Dogs/Dogs';
import Parks from '../Parks/Parks';


const userProfile = props => {

    return (
        <React.Fragment>
            <Segment className={classes.ProfileHeaderSection}>
                <UserImage src={props.user.profile_image_url} />
                <Divider />
                <Header className={classes.ProfileHeader} as='h1' size="huge" textAlign="center">
                    <Header.Content>
                        {props.user.username}
                    </Header.Content>
                    <Header.Subheader>
                        {props.user.neighborhood.name}                    
                    </Header.Subheader>
                    <Header.Subheader className={classes.ProfileSubHeader}>
                        {props.user.bio}
                    </Header.Subheader>
                </Header>
            </Segment>  
            <Segment>
                <Header as='h2' size="huge" >
                    <Header.Content>
                        My Dogs:
                    </Header.Content>
                </Header>
                <Dogs dogs={props.user.dogs} />
                <Divider />
                <Header as='h2' size="huge" >
                    <Header.Content>
                        Parks I Like:
                    </Header.Content>
                </Header>
                <Parks parks={props.user.parks} />
                <Divider />
            </Segment>  

        </React.Fragment>
    )
}

export default userProfile
