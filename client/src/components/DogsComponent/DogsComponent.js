import React from 'react';
import { Segment } from 'semantic-ui-react';
import Dogs from '../Dogs/Dogs';

function dogsList(props) {
    return (
        <Segment>
            <Dogs dogs={props.dogs} />
        </Segment>
    )
}

export default dogsList

