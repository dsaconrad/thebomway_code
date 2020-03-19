import React from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class Maps extends React.Component {
    render() {
        const mapStyles = {
            width: '100%',
            height: '100%',
        };
        return (
            <Map
                google={this.props.google}
                zoom={5}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176}}
            >
                <Marker position={{ lat: 48.00, lng: -122.00}} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'feed API key here'
})(Maps);