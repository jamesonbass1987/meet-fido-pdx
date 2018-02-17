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
        let attribute;

        if (this.props.ages.includes(value)){
            attribute = 'age'
        } else if (this.props.sizes.includes(value)){
            attribute = 'size'
        } else {
            attribute = 'breed'
        }

        this.props.onDogFilterUpdate(attribute, value)
    }

    render() {

        let breedsDropdownItems = this.props.breeds.map( (breed, i) => {
            return {
                text: breed,
                value: breed,
                key: i + breed
                }
        })

        let sizesDropdownItems = this.props.sizes.map( (size, i)  => {
            return {
                text: size,
                value: size,
                key: i + size
            }
        })

        let agesDropdownItems = this.props.ages.map( (age, i) => {
            return {
                value: age,
                text: age,
                key: i + age
            }
        })

        return (
            <Segment className={classes.InputContainer}>
                <Dropdown
                    placeholder='Breed'
                    onChange={this.handleFilterUpdate.bind(this)}
                    fluid
                    search
                    className={classes.InputDropdowns}
                    selection
                    options={breedsDropdownItems}
                    value={this.props.dogFilter.breeds}
                />
                <Dropdown
                    placeholder='Age'
                    fluid
                    className={classes.InputDropdowns}
                    selection
                    options={agesDropdownItems}
                    onChange={this.handleFilterUpdate.bind(this)}
                    value={this.props.dogFilter.age}
                />
                <Dropdown
                    placeholder='Size'
                    fluid
                    className={classes.InputDropdowns}
                    selection
                    options={sizesDropdownItems}
                    onChange={this.handleFilterUpdate.bind(this)}
                    value={this.props.dogFilter.size}
                />
            </Segment>
        );
    }
}

const mapStateToProps = state => {
    return {
        dogFilter: state.dog.currentFilter,
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