import React from 'react';

import { Container } from 'semantic-ui-react';

import PageHeading from '../PageHeading/PageHeading';
import UsersForm from '../UsersForm/UsersForm'
import Users from '../Users/Users'

const usersComponent = props => {
    return (
        <Container>
            <PageHeading
                as="h1"
                textAlignment="center"
                iconName="users"
                iconColor="blue"
                headingText="Search Users"
                subheadingText="Find others looking to meet up for a puppy playdate in PDX." />
            <UsersForm
                handleInputChanged={props.handleInputChanged}
                searchText={props.searchText}
                onChecked={props.onChecked}
                fencedChecked={props.fencedChecked}
                unfencedChecked={props.unfencedChecked}
                onFilterCheckboxUpdate={props.updateParksFilter}
                onSearchQueryUpdate={props.onSearchQueryUpdate}
            />
            <Users />
        </Container>
    );
};


export default usersComponent;