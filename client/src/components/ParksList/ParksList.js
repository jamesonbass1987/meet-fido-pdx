import React from 'react';
import { Segment } from 'semantic-ui-react';
import ParkForm from '../ParkForm/ParkForm';
import Parks from '../Parks/Parks';


const parksList = props => {

    const parks = props.parks.filter(park => {
        return park.name.toLowerCase().includes(props.filterParams.searchQuery.trim().toLowerCase())
    })

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
                <Parks parks={parks} />
            </Segment>
        )
}


export default parksList;