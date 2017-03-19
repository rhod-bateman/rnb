/**
 * Created by qtj929 on 27/02/2017.
 */
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Segment from '../segment/Segment';
import GoogleMap from 'google-map-react';
import styles from './gettingHere.css';
import {googleMapsLink} from '../../data/data';

const marker = () => (
    <div lat={51.210111} lng={-0.516389}>here</div>
)


const BigDay = () => (
    <Segment title="Getting Here">
        <section>
            <p>Parking is limited but the house is a short taxi ride from Guildford station.</p>
            <p><a href={googleMapsLink} target="_blank" rel="noopener noreferrer">Open GU48RD in Maps</a> or show your taxi driver this map so he can find us.</p>
        </section>
        <div className={styles.map}>
            <GoogleMap
                // apiKey={YOUR_GOOGLE_MAP_API_KEY} // set if you need stats etc ...
                center={[51.210111, -0.516389]}
                zoom={11}
                layerTypes={['TrafficLayer', 'TransitLayer']}
                >
                {marker()}
            </GoogleMap>
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



