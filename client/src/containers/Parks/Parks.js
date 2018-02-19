import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import { Container } from 'semantic-ui-react';

import classes from './Parks.css';

import ParksComponent from '../../components/ParksComponent/ParksComponent';
import PageHeading from '../../components/PageHeading/PageHeading';
import MapComponent from '../../components/Map/Map';
import ParkModal from '../../components/ParkModal/ParkModal';
import Spinner from '../../components/UI/Spinner/Spinner';

class Parks extends Component {

  state = {
    showModal: false,
    showInfoWindow: false,
  }

  componentWillMount(){
    this.props.onFetchParks();
  }

  handleMarkerClick = id => {
    this.props.onFetchPark(id)

    this.setState({
      showModal: true
    })
  }

  handleModalClose = () => {
    this.setState({
      showModal: false
    })
  }

  render() {

    let parkModal;
    if (this.props.selectedPark && !this.props.loading && this.state.showModal) {
      parkModal = <ParkModal 
                      selectedPark={this.props.selectedPark} 
                      showModal={this.state.showModal}
                      handleModalClose={this.handleModalClose} />
    }

    let parksContent = <Spinner />
    if (!this.props.loading){
      parksContent = <ParksComponent
          parks={this.props.parks}
          onSearchQueryUpdate={this.onSearchQueryUpdate}
          currentFilter={this.props.filterParams}
          loading={this.props.loading}
        />
    }

    return (
      <Container className={classes.Container}>
        <PageHeading
          as="h1"
          textAlignment="center"
          iconName="tree"
          iconColor="green"
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
          filterParams={this.props.filterParams}
        />
        {parksContent}
        {parkModal}
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    parks: state.park.parks,
    loading: state.park.loading,
    selectedPark: state.park.selectedPark,
    filterParams: state.park.parkFilter,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchParks: () => dispatch(actions.fetchParks()),
    onFetchPark: (id) => dispatch(actions.fetchPark(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Parks)