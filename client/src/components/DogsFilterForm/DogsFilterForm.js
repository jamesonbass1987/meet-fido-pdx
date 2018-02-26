import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchDogAttribute, updateDogFilter, resetDogFilter } from '../../store/actions/index';

import { Dropdown, Segment, Button, Icon } from 'semantic-ui-react'

import classes from './DogsFilterForm.css'

class DogFilterForm extends Component {

    componentWillMount(){
        if (this.props.attributes.breeds.length === 0){
            this.props.fetchDogAttribute("ages")
            this.props.fetchDogAttribute("breeds")
            this.props.fetchDogAttribute("sizes")
        }
    }

    handleFilterUpdate = (event, { value, id }) => {
        this.props.updateDogFilter(id, value)
    }

    render() {

        const breedsDropdownItems = this.props.attributes.breeds.map( (breed, i) => {
            return {
                text: breed.name,
                value: breed.name,
                key: i + breed
                }
        })

        const sizesDropdownItems = this.props.attributes.sizes.map( (size, i)  => {
            return {
                text: size.name,
                value: size.name,
                key: i + size
            }
        })

        const agesDropdownItems = this.props.attributes.ages.map( (age, i) => {
            return {
                value: age.name,
                text: age.name,
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
                    value={this.props.currentFilter.breed.name}
                    id='breed'
                />
                <Dropdown
                    placeholder='Age'
                    fluid
                    className={classes.InputDropdowns}
                    selection
                    options={agesDropdownItems}
                    onChange={this.handleFilterUpdate.bind(this)}
                    value={this.props.currentFilter.age.name}
                    id='age'
                />
                <Dropdown
                    placeholder='Size'
                    fluid
                    className={classes.InputDropdowns}
                    selection
                    options={sizesDropdownItems}
                    onChange={this.handleFilterUpdate.bind(this)}
                    value={this.props.currentFilter.size.name}
                    id='size'
                />
                <Button 
                    animated='vertical'
                    onClick={() => this.props.resetDogFilter()}
                    color="twitter"
                    floated="right"
                    className={classes.Button}
                >
                    <Button.Content hidden>Reset</Button.Content>
                    <Button.Content visible>
                        <Icon name='repeat' />
                    </Button.Content>
                </Button>
            </Segment>
        );
    }
}

const mapStateToProps = state => {
    const { currentFilter, attributes } = state.dog
    return { currentFilter, attributes }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ fetchDogAttribute, updateDogFilter, resetDogFilter }, dispatch)
};


export default connect(mapStateToProps, mapDispatchToProps)(DogFilterForm)