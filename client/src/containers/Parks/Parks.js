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
      console.log(this.props.parks)

      parks = this.props.parks.map(park => (
        <li key={park.name}>{park.name}</li>
      ))

    }
    
    return (
      <div>
        <h1>Find Parks</h1>
        <ul>
          {parks}
        </ul>
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