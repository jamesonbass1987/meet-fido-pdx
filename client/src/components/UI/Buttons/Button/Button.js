import React from 'react';
import { Button } from 'semantic-ui-react';

const button = props => (
    <Button 
        type={props.type}
        fluid={props.fluid}
        content={props.content}
        size={props.size}
        color={props.color}
        animated={props.animated}
        floated={props.floated}
        onClick={props.onClick}
    >{props.children}</Button>
);

export default button;