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
            <p>Parking is limited but the house is a short taxi ride from Guildford station.</p>
            <p><NewTabLink href={googleMapsLink}>Open GU48RD in Maps</NewTabLink> or show your taxi driver this map so he can find us.</p>
        </section>
        <div className={styles.map}>
            <Map center={[51.210111, -0.516389]} zoom={12}>
                <Marker lat={51.2104979} lng={-0.517000}><img className={styles.parking} src={weddingIcon} alt="W" /></Marker>
                <Marker lat={51.2057962} lng={-0.518342} ><img className={styles.parking} src={parkingIcon} alt="P" /></Marker>
                <Marker lat={51.2062943} lng={-0.521292} ><img className={styles.parking} src={parkingIcon} alt="P" /></Marker>
            </Map>
        </div>
    </Segment>
);

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({}, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BigDay);



