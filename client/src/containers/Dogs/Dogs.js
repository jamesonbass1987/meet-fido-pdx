import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchDogs } from '../../store/actions/index';

import classes from './Dogs.css'

import { Container } from 'semantic-ui-react';
import PageHeading from '../../components/PageHeading/PageHeading'
import DogsComponent from '../../components/DogsComponent/DogsComponent'

class Dogs extends Component {

    componentDidMount() {
        this.props.fetchDogs();
    }

    render() {
        return (
            <Container className={classes.Container}>
                <PageHeading
                    as="h1"
                    textAlignment="center"
                    iconName="search"
                    iconColor="blue"
                    headingText="Search For Dogs"
                    subheadingText="Find the perfect playtime pal for you best friend." />
                <DogsComponent 
                    dogs={this.props.dogs} 
                    loading={this.props.loading} 
                    filterParams={this.props.currentFilter} 
                />
            </Container>
        )
    }
}

const mapStateToProps = state => {
    const { dogs, loading, selectedDog, currentFilter } = state.dog
    return {
        dogs,
        loading,
        selectedDog,
        currentFilter
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ fetchDogs }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Dogs)