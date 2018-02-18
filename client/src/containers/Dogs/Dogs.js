import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../shared/axios-api';

import * as actions from '../../store/actions/index';

import { Container } from 'semantic-ui-react';
import PageHeading from '../../components/PageHeading/PageHeading'
import DogsComponent from '../../components/DogsComponent/DogsComponent'

class Dogs extends Component {

    componentDidMount() {
        this.props.onFetchDogs();
    }

    render() {
        return (
            <Container>
                <PageHeading
                    as="h1"
                    textAlignment="center"
                    iconName="search"
                    iconColor="blue"
                    headingText="Search For Dogs"
                    subheadingText="Find the perfect playtime pal for you best friend." />
                <DogsComponent dogs={this.props.dogs} filterParams={this.props.currentFilter} />
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        dogs: state.dog.dogs,
        loading: state.dog.loading,
        selectedDog: state.dog.selectedDog,
        currentFilter: state.dog.currentFilter
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchDogs: () => dispatch(actions.fetchDogs()),
        onFetchDog: (id) => dispatch(actions.fetchDog(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dogs, axios)