import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from '../../shared/axios-api';

import * as actions from '../../store/actions/index';

import { Container } from 'semantic-ui-react';
import ParkList from '../../components/ParkList/ParkList';
import PageHeading from '../../components/PageHeading/PageHeading'
import MapComponent from '../../components/Map/Map'


class Parks extends Component {

  componentDidMount(){
    this.props.onFetchParks();
  }

  render() {
    return (
      <Container>
        <PageHeading
          as="h1"
          textAlignment="center"
          iconName="tree"
          headingText="Search Parks Near You"
          subheadingText="Find the perfect park for you furry friend." />
        <MapComponent 
          isMarkerShown 
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          parks={this.props.parks}
          />
        <ParkList parks={this.props.parks}/>

      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    parks: state.park.parks,
    loading: state.park.loading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchParks: () => dispatch(actions.fetchParks())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Parks, axios)