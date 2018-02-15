import React, { Component } from 'react'
import { connect } from 'react-redux';

import axios from '../../shared/axios-api';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

class Parks extends Component {

  componentDidMount(){
    this.props.onFetchParks();
  }

  render() {
    let parks = <Spinner />

    if (!this.props.loading) {
      parks = this.props.parks.map(park => (
        <li>{park}</li>
      ))
    }

    return (
      <div>
        <h1>Find Parks</h1>
        {parks}
      </div>
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