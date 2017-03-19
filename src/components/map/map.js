/**
 * Created by qtj929 on 19/03/2017.
 */
import GoogleMap from 'google-map-react';
import React, { PropTypes } from 'react';

export const Marker = ({lat, lng, children, image}) => (
    <div lat={lat} lng={lng}>{children}</div>
);

// API
// https://github.com/istarkov/google-map-react/blob/master/API.md
export const Map = ({center, zoom, children }) => (
    <GoogleMap
        center={center}
        zoom={zoom}
        layerTypes={['TrafficLayer', 'TransitLayer']} >
        {children}
    </GoogleMap>
);


export default Map;
