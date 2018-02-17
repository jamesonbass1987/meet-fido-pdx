import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index';
import { Form, Input, Checkbox } from 'semantic-ui-react'

import classes from './DogsForm.css'

class DogForm extends Component {

    componentWillMount(){
        this.props.ages.length === 0 ? this.props.onFetchAttribute("ages") : null;
        this.props.breeds.length === 0 ? this.props.onFetchAttribute("breeds") : null;
        this.props.sizes.length === 0 ? this.props.onFetchAttribute("sizes") : null;
    }

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
        dogFilter: state.dog.dogFilter,
        ages: state.dog.attributes.ages,
        breeds: state.dog.attributes.breeds,
        sizes: state.dog.attributes.sizes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchFilterUpdate: (type, value) => dispatch(actions.updateParkFilter(type, value)),
        onFetchAttribute: (attribute) => dispatch(actions.fetchDogAttribute(attribute))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DogForm)