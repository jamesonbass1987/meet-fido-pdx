import React from 'react';
import { Form } from 'semantic-ui-react'
import classes from './Input.css';

const input = props => (
    <Form.Field
        control={props.control}
        id={props.id}
        type={props.type}
        label={props.label}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
    />
);

export default input;