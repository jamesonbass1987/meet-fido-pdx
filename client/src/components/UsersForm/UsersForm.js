import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import { Form, Dropdown, Input } from 'semantic-ui-react';

class UsersForm extends Component {

    componentWillMount(){

        if (this.props.parks.length === 0){
            this.props.fetchParks();
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
            <Form size="large">
                <Input
                    name="searchQuery"
                    fluid
                    icon='search'
                    placeholder='Search for users by name...'
                    value={this.props.searchQuery}
                    onChange={this.handleFilterUpdate}
                />
                <Dropdown
                    placeholder='Filter by the parks a user visits...'
                    multiple
                    fluid
                    search
                    selection
                    options={parksDropdownItems}
                />
            </Form>
        );
    }
}

const mapStateToProps = state => ({
    parks: state.park.parks,
    searchQuery: state.user.userFilter.searchQuery,
    selectedParks: state.user.userFilter.selectedParks
})

const mapDispatchToProps = dispatch => ({
    fetchParks: () => dispatch(actions.fetchParks())
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersForm)
