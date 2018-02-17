import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index';
import { Form, Input, Dropdown, Segment } from 'semantic-ui-react'

import classes from './DogsForm.css'

class DogForm extends Component {

    componentWillMount(){
        if (this.props.breeds.length === 0){
            this.props.onFetchAttribute("ages")
            this.props.onFetchAttribute("breeds")
            this.props.onFetchAttribute("sizes")
        }
    }

    render() {

        let breedsDropdownItems = this.props.breeds.map((breed, i) => {
            return {
                text: breed.name,
                key: i + breed.name,
                value: breed.id
            }
        })

        let sizesDropdownItems = this.props.sizes.map((size, i) => {
            return {
                text: size.name,
                key: i + size.name,
                value: size.id
            }
        })

        let agesDropdownItems = this.props.ages.map((age, i) => {
            return {
                text: age.name,
                key: i + age.name,
                value: age.id
            }
        })

        return (
            <Segment className={classes.InputContainer}>
                <Dropdown
                    placeholder='Breed'
                    button
                    fluid
                    multiple
                    className={classes.InputDropdowns}
                    selection
                    options={breedsDropdownItems}
                />
                <Dropdown
                    placeholder='Age'
                    button
                    fluid
                    multiple
                    className={classes.InputDropdowns}
                    selection
                    options={agesDropdownItems}
                />
                <Dropdown
                    placeholder='Size'
                    button
                    fluid
                    multiple
                    className={classes.InputDropdowns}
                    selection
                    options={sizesDropdownItems}
                />
            </Segment>
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