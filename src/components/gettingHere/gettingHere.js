/**
 * Created by qtj929 on 27/02/2017.
 */
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Segment from '../segment/Segment';
import styles from './gettingHere.css';
import {googleMapsLink} from '../../data/data';
import {Map, Marker} from '../map/map';


const BigDay = () => (
    <Segment title="Getting Here">
        <section>
            <p>Parking is limited but the house is a short taxi ride from Guildford station.</p>
            <p><a href={googleMapsLink} target="_blank" rel="noopener noreferrer">Open GU48RD in Maps</a> or show your taxi driver this map so he can find us.</p>
        </section>
        <div className={styles.map}>
            <Map center={[51.210111, -0.516389]} zoom={11}>
                <Marker lat={51.210111} lng={-0.516389}>here</Marker>
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



