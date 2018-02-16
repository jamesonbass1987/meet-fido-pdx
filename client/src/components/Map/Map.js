import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

// import classes from './Map.css'

const mapComponent = props => {
    
    const parkMarkerList = props.parks.map((park, i) => (
            <Marker
                position={{lat: parseFloat(park.loc_latitude), lng: parseFloat(park.loc_longitude)}}
                key={i}
                clickable
                onClick={() => props.markerClicked(park.id)}
                >
            </Marker>
    ))

    return (
        <div>
            <GoogleMap
                defaultZoom={11}
                defaultCenter={{ lat: 45.523062, lng: -122.676482 }}
            >
                {parkMarkerList}
            </GoogleMap>
        </div>
    )
}

export default withScriptjs(withGoogleMap(mapComponent));
