/**
 * Created by qtj929 on 27/02/2017.
 */
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Segment from '../segment/Segment';
import styles from './gettingHere.css';
import {googleMapsLink} from '../../data/index';
import {Map, Marker} from '../map/map';
import NewTabLink from '../utils/newTabLink';
import weddingIcon from '../../assets/heart.png'
import parkingIcon from '../../assets/parking.png'

const BigDay = () => (
    <Segment title="Getting Here..." name="journey">
        <section>
            <p>There are a handful of spaces in the field at the house.</p>
            <p>There may be some parking in the village (the P's on the map) about a 10-15 minute walk from the house.</p>
            <p>We recommend getting a taxi over driving; it will be much easier. <NewTabLink href={googleMapsLink}>Open GU48RD in Maps</NewTabLink> or show your taxi driver this map so he can find us.</p>
        </section>
        <div className={styles.map}>
            <Map center={[51.210111, -0.516389]} zoom={12}>
                <Marker lat={51.2104979} lng={-0.517000}><img className={styles.parking} src={weddingIcon} alt="W" /></Marker>
                <Marker lat={51.2057962} lng={-0.518342} ><img className={styles.parking} src={parkingIcon} alt="P" /></Marker>
                <Marker lat={51.2062943} lng={-0.521292} ><img className={styles.parking} src={parkingIcon} alt="P" /></Marker>
                <Marker lat={51.2055014} lng={-0.521000} ><img className={styles.parking} src={parkingIcon} alt="P" /></Marker>
            </Map>
        </div>
    </Segment>
);

const mapStateToProps = state => ({});

export default connect(
    mapStateToProps
)(BigDay);



