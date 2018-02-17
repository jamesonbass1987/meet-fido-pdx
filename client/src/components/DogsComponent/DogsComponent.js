import React from 'react';
import { Segment, Divider, Header } from 'semantic-ui-react';
import Dogs from '../Dogs/Dogs';
import DogForm from '../DogsForm/DogsForm'

function dogsList(props) {
    return (
        <Segment>
            <Header 
                as='h3'
                textAlign='center'
            >Use the menu to search for the perfect furry friend!</Header>
            <DogForm
                // handleInputChanged={props.handleInputChanged}
                // searchText={props.searchText}
                // onChecked={props.onChecked}
                // fencedChecked={props.fencedChecked}
                // unfencedChecked={props.unfencedChecked}
                // onFilterCheckboxUpdate={props.updateParksFilter}
                // onSearchQueryUpdate={props.onSearchQueryUpdate}
            />
            <Divider />
            <Dogs dogs={props.dogs} />
        </Segment>
    )
}

export default dogsList

