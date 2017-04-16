/**
 * Created by qtj929 on 19/03/2017.
 */
import GoogleMap from 'google-map-react';
import React, { PropTypes } from 'react';
import config from '../../config/client.config';

export const Marker = ({lat, lng, children, image}) => (
    <div lat={lat} lng={lng}>{children}</div>
);

// API
// https://github.com/istarkov/google-map-react/blob/master/API.md
export const Map = ({center, zoom, children }) => (
    <GoogleMap
        apiKey={config.googleMaps.apiKey}
        center={center}
        zoom={zoom}
        layerTypes={['TrafficLayer', 'TransitLayer']} >
        {children}
    </GoogleMap>
);


export default Map;
