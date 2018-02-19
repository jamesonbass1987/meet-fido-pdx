import React from 'react';
import { Segment, Divider } from 'semantic-ui-react';
import ParkForm from '../ParkForm/ParkForm';
import Parks from '../Parks/Parks';

const parksComponent = props => (
    <Segment>
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
            loading={props.loading}
            currentFilter={props.currentFilter}
        />
    </Segment>
)

export default parksComponent