import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from '../../shared/axios-api';

import * as actions from '../../store/actions/index';

import { Container } from 'semantic-ui-react';
import ParkList from '../../components/ParkList/ParkList';


class Parks extends Component {

  componentDidMount(){
    this.props.onFetchParks();
  }


  render() {
    return (
      <Container>
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