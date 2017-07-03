/**
 * Created by qtj929 on 27/02/2017.
 */
import React, { PropTypes } from 'react';
import Segment from '../segment/Segment';
import styles from './gettingHere.css';
import {googleMapsLink, chilworthWalkingDirections} from '../../data/index';
import {Map, Marker} from '../map/map';
import NewTabLink from '../utils/newTabLink';
import weddingIcon from '../../assets/heart.png'
import parkingIcon from '../../assets/parking.png'

const GettingHere = () => (
    <Segment title="Getting Here..." name="journey">
        <section>
            <h3>Driving</h3>
            <p>There are only a handful of spaces in the field at the house.</p>
            <p>If you're not lucky enough to get parking at the house, there may be some in the village (the P's on the map) about a 10-15 minute walk away.</p>
            <p>We recommend getting a taxi over driving; it will be much easier.</p>
        </section>

        <section>
            <h3>From Guildford station</h3>
            <p>There is a taxi rank at the station; this is easiest. There is a weekly bus to Blackheath, but its unlikely to arrive at the time you need. </p>
            <p><NewTabLink href={googleMapsLink}>Open GU48RD in Maps</NewTabLink> or show your taxi driver this map so he can find us.</p>
            <div className={styles.map}>
                <Map center={[51.210111, -0.516389]} zoom={12}>
                    <Marker lat={51.2104979} lng={-0.517000}><img className={styles.parking} src={weddingIcon} alt="W" /></Marker>
                    <Marker lat={51.2057962} lng={-0.518342} ><img className={styles.parking} src={parkingIcon} alt="P" /></Marker>
                    <Marker lat={51.2062943} lng={-0.521292} ><img className={styles.parking} src={parkingIcon} alt="P" /></Marker>
                    <Marker lat={51.2055014} lng={-0.521000} ><img className={styles.parking} src={parkingIcon} alt="P" /></Marker>
                </Map>
            </div>
        </section>

        <section>
            <h3>From Chilworth station</h3>
            <p>Chilworth station is the closest station but definitely not the easiest. There is no taxi rank and probably no phone reception.</p>
            <p>If you like walking its about <NewTabLink href={chilworthWalkingDirections}>20 minutes up a hill</NewTabLink></p>
            <p>If you don't like walking, we recommend booking a cab in advance to meet you there.</p>
        </section>
    </Segment>
);

export default GettingHere;
