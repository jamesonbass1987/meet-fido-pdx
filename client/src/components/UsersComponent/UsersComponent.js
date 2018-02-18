import React from 'react';

import { Container } from 'semantic-ui-react';

import PageHeading from '../PageHeading/PageHeading';
import Users from '../Users/Users'

const usersComponent = props => {
    return (
        <Container>
            <PageHeading
                as="h1"
                textAlignment="center"
                iconName="users"
                headingText="Search Users"
                subheadingText="Find others looking to meet up for a puppy playdate in PDX." />
            <Users />
        </Container>
    );
};


export default usersComponent;