import React from 'react';
import { Grid } from 'semantic-ui-react';

import ParkItem from './ParkItem/ParkItem'
import Spinner from '../../components/UI/Spinner/Spinner';


const parkList = props => {

    let parks = <Spinner />

    if (!props.loading) {
        const parkNodeList = props.parks.map(park => (
            <ParkItem key={park.id} park={park} />
        ))

        parks = <Grid celled>{parkNodeList}</Grid>
    }

    return (
        <Grid>
            {parks}
        </Grid>
    );
}


export default parkList;