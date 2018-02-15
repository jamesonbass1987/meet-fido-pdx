import React, { Component } from 'react'
import { connect } from 'react-redux';

class Park extends Component {

  render() {
    return (
      <div>
        <h1>Find Parks</h1>
      </div>
    )
  }
}

export default connect(null, null)(Park)
