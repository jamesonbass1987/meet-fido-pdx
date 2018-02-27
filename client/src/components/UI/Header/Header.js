import React from 'react';
import { Header } from 'semantic-ui-react';

const header = props => (
    <Header 
        as={props.as} 
        content={props.content}
        textAlign={props.textAlign}
        content={props.content || props.children}
    />
);

export default header;