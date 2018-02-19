import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import classes from './UsersForm.css';

import { Form, Dropdown, Input, Button, Icon } from 'semantic-ui-react';

class UsersForm extends Component {

    componentWillMount(){

        if (this.props.parks.length === 0){
            this.props.fetchParks();
        }
    }

    handleFilterUpdate = (event, { value }) => {
        if (event.target.name === 'searchQuery') {
            this.props.onSearchFilterUpdate(event.target.name, event.target.value)
        } else {
            this.props.onSearchFilterUpdate('selectedPark', value)
        }
    }

    render() {

        const parksDropdownItems = this.props.parks.map((park, i) => {
            return {
                text: park.name,
                value: park.name,
                key: i + park.name
            }
        })

        return (
            <Form className={classes.UsersForm} size="large">
                <Input
                    name="searchQuery"
                    fluid
                    icon='search'
                    placeholder='Search for users by name...'
                    value={this.props.searchQuery}
                    onChange={this.handleFilterUpdate}
                    className={classes.InputDropdowns}
                />
                <Dropdown
                    placeholder='Filter by the park a user visits...'
                    fluid
                    search
                    selection
                    options={parksDropdownItems}
                    onChange={this.handleFilterUpdate}
                    className={classes.InputDropdowns}
                    value={this.props.selectedPark}
                />
                <Button
                    animated='vertical'
                    onClick={() => this.props.onFormReset()}
                    color="twitter"
                    floated="right"
                    className={classes.Button}
                >
                    <Button.Content hidden>Reset</Button.Content>
                    <Button.Content visible>
                        <Icon name='repeat' />
                    </Button.Content>
                </Button>
            </Form>
        );
    }
}

const mapStateToProps = state => ({
    parks: state.park.parks,
    searchQuery: state.user.userFilter.searchQuery,
    selectedParknpm : state.user.userFilter.selectedPark
})

const mapDispatchToProps = dispatch => ({
    fetchParks: () => dispatch(actions.fetchParks()),
    onSearchFilterUpdate: (type, value) => dispatch(actions.updateUserFilter(type, value)),
    onFormReset: () => dispatch(actions.resetUserFilter())
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersForm)
