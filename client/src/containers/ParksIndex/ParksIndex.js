import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchParks, fetchPark, updateParkFilter } from '../../store/actions/index';

import { Container } from 'semantic-ui-react';

import classes from './ParksIndex.css';

import ParksComponent from '../../components/ParksComponent/ParksComponent';
import PageHeading from '../../components/PageHeading/PageHeading';
import MapComponent from '../../components/Map/Map';
import Spinner from '../../components/UI/Spinner/Spinner';

class ParksIndex extends Component {

  state = {
    showInfoWindow: false
  }

  componentWillMount(){
    this.props.fetchParks();
  }

  componentWillUnmount(){
    this.props.fetchParks();
  }

  handleMarkerClick = parkName => {
    this.props.updateParkFilter('searchQuery', parkName)
  }

  render() {

    let parks = <Spinner />
    if (!this.props.loading){
      parks = <ParksComponent
          parks={this.props.parks}
          onSearchQueryUpdate={this.onSearchQueryUpdate}
          currentFilter={this.props.parkFilter}
          hasAddedParks={this.handleParkAdded}
        />
    } 

    return (
      <Container className={classes.Container}>
        <PageHeading
          as="h1"
          textAlignment="center"
          iconName="tree"
          iconColor="green"
          type='icon'
          headingText="Search Parks Near You"
          subheadingText="Find the perfect park for you furry friend." />
        <MapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          content={this.props.parks}
          markerClicked={this.handleMarkerClick}
          filterParams={this.props.parkFilter}
        />
        {parks}
      </Container>
    )
  }
}

const mapStateToProps = state => {
  const { parks, loading, selectedPark, parkFilter } = state.park;
  return {
    parks,
    loading,
    selectedPark,
    parkFilter, 
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ fetchParks, fetchPark, updateParkFilter }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ParksIndex);