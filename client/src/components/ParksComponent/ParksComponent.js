import React from 'react';
import { Segment, Divider } from 'semantic-ui-react';
import ParkForm from '../ParkForm/ParkForm';
import Parks from '../Parks/Parks';
import classes from './ParksComponent.css';

const parksComponent = props => (
    <Segment className={classes.ParksContent}>
        <ParkForm
            handleInputChanged={props.handleInputChanged}
            searchText={props.searchText}
            onChecked={props.onChecked}
            fencedChecked={props.fencedChecked}
            unfencedChecked={props.unfencedChecked}
            onFilterCheckboxUpdate={props.updateParksFilter}
            onSearchQueryUpdate={props.onSearchQueryUpdate}
        />
        <Divider />
        <Parks 
            parks={props.parks}
            currentFilter={props.currentFilter}
            currentUser={props.currentUser}
        />
    </Segment>
)

export default parksComponent