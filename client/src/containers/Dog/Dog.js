import React, { Component } from 'react'
import { connect } from 'react-redux';

class Dog extends Component {

    render() {
        return (
            <div>
                <h1>Find Dogs</h1>
            </div>
        )
    }
}

export default connect(null, null)(Dog)
