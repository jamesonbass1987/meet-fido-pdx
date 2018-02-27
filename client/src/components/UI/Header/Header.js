import React from 'react';
import { Header } from 'semantic-ui-react';

const header = props => (
    <Header 
        as={props.as} 
        content={props.content}
    />
);

export default header;