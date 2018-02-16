import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const mapComponent = props => {
    

    const parkMarkerList = props.parks.map((park, i) => {
        debugger;

        return (
            <Marker
                position={{lat: park.loc_latitude, lng: park.loc_longitude}}
                key={i}
            />
        )
    }
    )

    return (
        <GoogleMap
            defaultZoom={11}
            defaultCenter={{ lat: 45.523062, lng: -122.676482 }}
        >
        {parkMarkerList}
        </GoogleMap>
    )
}

export default withScriptjs(withGoogleMap(mapComponent));
