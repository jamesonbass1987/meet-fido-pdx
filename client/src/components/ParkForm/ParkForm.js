import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index';
import { Form, Input, Checkbox } from 'semantic-ui-react'

import classes from './ParkForm.css'

class ParkForm extends Component{


    handleFilterUpdate = (event) => {
        if (event.target.name === 'searchQuery'){
            this.props.onSearchFilterUpdate(event.target.name, event.target.value)
        } else {
            const name = event.target.id
            const value = !this.props.parkFilter[name]
            this.props.onSearchFilterUpdate(name, value)
        }
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
            </Form>
        )

    }
    
}

const mapStateToProps = state => {
    return {
        parkFilter: state.park.parkFilter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchFilterUpdate: (type, value) => dispatch(actions.updateParkFilter(type, value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkForm)
