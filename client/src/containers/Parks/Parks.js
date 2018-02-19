import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import { Header, Modal, Image, Container } from 'semantic-ui-react';

import classes from './Parks.css';

import ParksComponent from '../../components/ParksComponent/ParksComponent';
import PageHeading from '../../components/PageHeading/PageHeading';
import MapComponent from '../../components/Map/Map';
import ParkModal from '../../components/UI//Modal/Modal';
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

    // Set park modal to selected park once one is clicked on map, pass in modal props to ParkModal
    // as children to display on page.

    let parkModal;

    if (this.props.selectedPark && !this.props.loading && this.state.showModal) {
      const isFenced = this.props.selectedPark.fenced ? "Fenced" : "Open Off Leash Area"
      const parkAddress = !this.props.selectedPark.address_2 ? `${this.props.selectedPark.address_1}` : `${this.props.selectedPark.address_1} and ${this.props.selectedPark.address_2}`
      const hours = `${this.props.selectedPark.hours_open} A.M. to ${this.props.selectedPark.hours_close}`      
      const directionsURL = `https://www.google.com/maps/search/?api=1&query=${this.props.selectedPark.loc_latitude},${this.props.selectedPark.loc_longitude}`
      parkModal = (<ParkModal
          park={this.props.selectedPark}
          show={this.state.showModal}
          size="large"
          handleClose={this.handleModalClose}
        >
        <Modal.Header>{this.props.selectedPark.name}</Modal.Header>
          <Modal.Content verticalAlign="middle" image>
          <Image size='medium' src={this.props.selectedPark.image_url} />
            <Modal.Description>
              <Header>About The Park:</Header>
              <p>{this.props.selectedPark.description}</p>
              <p><strong>Address: </strong>{parkAddress} <a target="_blank" href={directionsURL}>(Get Directions)</a></p>
              <p><strong>Park Hours: </strong>{hours}</p>
              <p><strong><em>{isFenced}</em></strong></p>
            </Modal.Description>
          </Modal.Content>
        </ParkModal>)
    }

    let parksContent = <Spinner />

    if (!this.props.loading){
      parksContent = <ParksComponent
          parks={this.props.parks}
          onSearchQueryUpdate={this.onSearchQueryUpdate}
          filterParams={this.props.filterParams}
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