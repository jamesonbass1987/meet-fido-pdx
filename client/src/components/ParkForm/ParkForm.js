import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index';
import { Form, Input, Checkbox, Button, Icon } from 'semantic-ui-react'

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
    return {
        parkFilter: state.park.parkFilter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchFilterUpdate: (type, value) => dispatch(actions.updateParkFilter(type, value)),
        resetParkFilter: () => dispatch(actions.resetParkFilter())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkForm)
