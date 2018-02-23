import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchParks, fetchPark } from '../../store/actions/index';

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
    this.props.fetchParks();
  }

  handleMarkerClick = id => {
    this.props.fetchPark(id)

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

    let parks = <Spinner />
    if (!this.props.loading){
      parks = <ParksComponent
          parks={this.props.parks}
          onSearchQueryUpdate={this.onSearchQueryUpdate}
          currentFilter={this.props.parkFilter}
          currentUser={this.props.currentUser}
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
        {parkModal}
      </Container>
    )
  }
}

const mapStateToProps = state => {
  const { parks, loading, selectedPark, parkFilter } = state.park;
  const { currentUser } = state.user;
  return {
    parks,
    loading,
    selectedPark,
    parkFilter,
    currentUser
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({fetchParks, fetchPark}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Parks);