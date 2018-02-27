import React from 'react';
import { Button } from 'semantic-ui-react';

const button = props => (
    <Button 
        type={props.type}
        fluid={props.fluid}
        content={props.content}
        size={props.size}
        color={props.color}
    />
);

export default button;