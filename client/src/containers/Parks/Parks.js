import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from '../../shared/axios-api';

import * as actions from '../../store/actions/index';

import { Container } from 'semantic-ui-react';
// import ParkList from '../../components/ParkList/ParkList';
import PageHeading from '../../components/PageHeading/PageHeading'
import MapComponent from '../../components/Map/Map'
import Modal from '../../components/UI/Modal/Modal'


class Parks extends Component {

  state = {
    showModal: false
  }

  componentDidMount(){
    this.props.onFetchParks();
  }

  handleMarkerClick = id => {
    this.props.onFetchPark(id)

    this.setState({
      ...this.state,
      showModal: true
    })
  }

  handleModalClose = () => {
    this.setState({
      ...this.state,
      showModal: false
    })
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
          markerClicked={this.handleMarkerClick}
          />
        {/* <ParkList parks={this.props.parks}/> */}
        <Modal show={this.state.showModal} handleClose={this.handleModalClose} />
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    parks: state.park.parks,
    loading: state.park.loading,
    selectedPark: state.park.selectedPark,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchParks: () => dispatch(actions.fetchParks()),
    onFetchPark: (id) => dispatch(actions.fetchPark(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Parks, axios)