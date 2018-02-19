import React from 'react';
import { connect } from 'react-redux';
import { Item } from 'semantic-ui-react'

import Park from './Park/Park'
import Spinner from '../UI/Spinner/Spinner'

import { parkFilter } from '../../shared/parkFilter'

const parks = props => {

    let parksList = <Spinner />

    if (!props.loading) {
        const parksArray = parkFilter(props.parks, props.currentFilter);
        parksList = parksArray.map(park => (
            <Park key={park.id} park={park} />
        ))
    }

    return (
        <Item.Group divided>
            {parksList}
        </Item.Group>
    );
};

const mapStateToProps = state => ({
    parks: state.park.parks,
    loading: state.park.loading,
    currentFilter: state.park.parkFilter,
})


export default connect(mapStateToProps)(parks)