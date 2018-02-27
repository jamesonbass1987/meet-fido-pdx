import React from 'react';
import { Form } from 'semantic-ui-react'

const dropdown = props => (
    <Form.Dropdown
        fluid={props.fluid}
        selection={props.selection}
        label={props.label}
        id={props.id}
        options={props.options}
        onChange={props.onChange}
        defaultValue={props.defaultValue} />
);

export default dropdown;