import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../shared/axios-api';

import * as actions from '../../store/actions/index';

import { Container } from 'semantic-ui-react';
import PageHeading from '../../components/PageHeading/PageHeading'
import DogsComponent from '../../components/DogsList/DogsList'

class Dogs extends Component {

    render() {
        return (
            <Container>
                <PageHeading
                    as="h1"
                    textAlignment="center"
                    iconName="search"
                    headingText="Search For Dogs"
                    subheadingText="Find the perfect playtime pal for you best friend." />
                <DogsComponent />
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        dogs: state.dog.dogs,
        loading: state.dog.loading,
        selectedDog: state.dog.selectedDog,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchDogs: () => dispatch(actions.fetchDogs()),
        onFetchDog: (id) => dispatch(actions.fetchDog(id))
    };
};

export default connect(null, null)(Dogs, axios)