import React from 'react';
import { Segment } from 'semantic-ui-react';
import Dogs from '../Dogs/Dogs';
import DogForm from '../DogsForm/DogsForm'

function dogsList(props) {
    return (
        <Segment>
            <DogForm
                // handleInputChanged={props.handleInputChanged}
                // searchText={props.searchText}
                // onChecked={props.onChecked}
                // fencedChecked={props.fencedChecked}
                // unfencedChecked={props.unfencedChecked}
                // onFilterCheckboxUpdate={props.updateParksFilter}
                // onSearchQueryUpdate={props.onSearchQueryUpdate}
            />
            <Dogs dogs={props.dogs} />
        </Segment>
    )
}

export default dogsList

