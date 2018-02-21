import React from 'react';

import { Container, Segment, Divider } from 'semantic-ui-react';


import UsersForm from '../UsersForm/UsersForm'
import Users from '../Users/Users'

const usersComponent = props => {
    return (
        <Segment>
            <UsersForm
                handleInputChanged={props.handleInputChanged}
                searchText={props.searchText}
                onChecked={props.onChecked}
                fencedChecked={props.fencedChecked}
                unfencedChecked={props.unfencedChecked}
                onFilterCheckboxUpdate={props.updateParksFilter}
                onSearchQueryUpdate={props.onSearchQueryUpdate}
            />
            <Divider />
            <Users users={props.users} currentFilter={props.currentFilter} parkFilter={props.parkFilter} loading={props.loading}/>
        </Segment>
    );
};


export default usersComponent;