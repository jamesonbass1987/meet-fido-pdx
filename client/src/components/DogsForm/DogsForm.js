import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index';
import { Dropdown, Segment } from 'semantic-ui-react'

import classes from './DogsForm.css'

class DogForm extends Component {

    componentWillMount(){
        if (this.props.breeds.length === 0){
            this.props.onFetchAttribute("ages")
            this.props.onFetchAttribute("breeds")
            this.props.onFetchAttribute("sizes")
        }
    }

    handleFilterUpdate = (event, { value }) => {
        const attribute = value.toString()
        const val = event.target.innerText
        this.props.onDogFilterUpdate(attribute, val)
    }

    render() {

        let breedsDropdownItems = this.props.breeds.map((breed, i) => {
            return {
                text: breed.name,
                key: i + breed.name,
                value: 'breed',
                }
        })

        let sizesDropdownItems = this.props.sizes.map((size, i) => {
            return {
                text: size.name,
                key: i + size.name,
                value: 'size',
            }
        })

        let agesDropdownItems = this.props.ages.map((age, i) => {
            return {
                text: age.name,
                key: i + age.name,
                value: 'age',
            }
        })

        return (
            <Segment className={classes.InputContainer}>
                <Dropdown
                    placeholder='Breed'
                    onChange={this.handleFilterUpdate}
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
                    onChange={this.handleFilterUpdate}
                />
                <Dropdown
                    placeholder='Size'
                    button
                    fluid
                    multiple
                    className={classes.InputDropdowns}
                    selection
                    options={sizesDropdownItems}
                    onChange={this.handleFilterUpdate}
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
        onFetchAttribute: (attribute) => dispatch(actions.fetchDogAttribute(attribute)),
        onDogFilterUpdate: (attribute, value) => dispatch(actions.updateDogFilter(attribute, value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DogForm)