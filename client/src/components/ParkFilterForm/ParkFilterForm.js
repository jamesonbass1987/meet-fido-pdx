import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { updateParkFilter, resetParkFilter } from '../../store/actions/index';

import { Form, Input, Checkbox, Button, Icon } from 'semantic-ui-react'

import classes from './ParkFilterForm.css'

class ParkFilterForm extends Component{


    handleFilterUpdate = (event) => {
        if (event.target.name === 'searchQuery'){
            this.props.updateParkFilter(event.target.name, event.target.value)
        } else {
            const name = event.target.id
            const value = !this.props.parkFilter[name]
            this.props.updateParkFilter(name, value)
        }
    }

    handleFormReset = () => {
        this.props.resetParkFilter();
    }


    render(){
        return (
            <Form size="large" className={classes.Form}>
                <Input
                    className={classes.FormInput}
                    name="searchQuery"
                    fluid
                    icon='search'
                    placeholder='Search for parks by name...'
                    value={this.props.parkFilter.searchQuery}
                    onChange={this.handleFilterUpdate}
                />
                <Checkbox
                    toggle
                    id="fencedPark"
                    defaultChecked={this.props.parkFilter.fencedPark}
                    label="Fenced"
                    className={classes.FormCheckbox}
                    onChange={this.handleFilterUpdate}
                />
                <Checkbox
                    toggle
                    id="unfencedPark"
                    defaultChecked={this.props.parkFilter.unfencedPark}
                    label="Open Off Leash Areas"
                    className={classes.FormCheckbox}
                    onChange={this.handleFilterUpdate}
                />
                <Button
                    animated='vertical'
                    onClick={() => this.handleFormReset()}
                    color="twitter"
                    floated="right"
                    className={classes.Button}
                ><Button.Content hidden>Reset</Button.Content>
                    <Button.Content visible>
                        <Icon name='repeat' />
                    </Button.Content>
                </Button>
            </Form>
        )

    }
    
}

const mapStateToProps = state => {
    const { parkFilter } = state.park;
    return { parkFilter }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators( { updateParkFilter, resetParkFilter }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ParkFilterForm)
