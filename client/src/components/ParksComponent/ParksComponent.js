import React from 'react';
import { Segment } from 'semantic-ui-react';
import ParkForm from '../ParkForm/ParkForm';
import Parks from '../Parks/Parks';


const parksList = props => {
    return (
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
                <Parks />
            </Segment>
        )
}


export default parksList;