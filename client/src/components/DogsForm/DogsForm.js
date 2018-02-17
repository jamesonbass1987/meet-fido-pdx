import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index';
import { Form, Input, Checkbox } from 'semantic-ui-react'

import classes from './DogsForm.css'

class DogForm extends Component {
    render() {
        return (
            <Form className={classes.Form}>
                <Input 
                    icon='search'
                    placeholder="Search dogs by name..."
                />
            </Form>
        );
    }
}

const mapStateToProps = state => {
    return {
        dogFilter: state.dog.dogFilter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchFilterUpdate: (type, value) => dispatch(actions.updateParkFilter(type, value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DogForm)