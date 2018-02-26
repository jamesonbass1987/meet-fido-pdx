import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchParks, updateUserFilter, resetUserFilter }  from '../../store/actions/index';

import { Form, Dropdown, Input, Button, Icon } from 'semantic-ui-react';

import classes from './UsersForm.css';

class UsersForm extends Component {

    componentWillMount(){

        if (this.props.parks.length === 0){
            this.props.fetchParks();
        }
    }

    handleFilterUpdate = (event, { value, id }) => {
        this.props.updateUserFilter(id, value)
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
                    fluid
                    icon='search'
                    placeholder='Search for users by name...'
                    value={this.props.searchQuery}
                    onChange={this.handleFilterUpdate}
                    className={classes.InputDropdowns}
                    id='searchQuery'
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
                    id='selectedPark'
                />
                <Button
                    animated='vertical'
                    onClick={() => this.props.resetUserFilter()}
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

const mapStateToProps = state => {
    const { parks } = state.park;
    const { searchQuery, selectedPark } = state.user.userFilter;
    return { parks, searchQuery, selectedPark };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators( { fetchParks, updateUserFilter, resetUserFilter }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(UsersForm);
