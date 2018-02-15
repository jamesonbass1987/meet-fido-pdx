import React, { Component } from 'react'
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
// import Spinner from '../../components/UI/Spinner/Spinner';

class Parks extends Component {

  render() {
    return (
      <div>
        <h1>Find Parks</h1>
      </div>
    )
  }
}

export default connect(null, null)(Parks)
