/**
 * Created by qtj929 on 28/02/2017.
 */
import React from 'react'
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

export default function Map (props) {
    return (
        <section style={{height: "100%"}}>
            <GoogleMapLoader
                containerElement={
                    <div
                        {...props.containerElementProps}
                        style={{
                            height: "100%",
                        }}
                    />
                }
                googleMapElement={
                    <GoogleMap
                        ref={(map) => console.log(map)}
                        defaultZoom={3}
                        defaultCenter={{ lat: 51.2415101, lng: -0.6004427 }}
                        onClick={props.onMapClick}
                    >
                        {props.markers && props.markers.map((marker, index) => {
                            return (
                                <Marker
                                    {...marker}
                                    onRightclick={() => props.onMarkerRightclick(index)} />
                            );
                        })}
                    </GoogleMap>
                }
            />
        </section>
    );
}
