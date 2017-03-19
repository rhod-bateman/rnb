/**
 * Created by qtj929 on 27/02/2017.
 */
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Segment from '../segment/Segment';
import GoogleMapReact from 'google-map-react';

const BigDay = () => (
    <Segment title="Getting Here">
        <section>
            <p>Parking is limited but the house is a short taxi ride from Guildford station.</p>
            <p>Show your taxi driver this map so he can find us.</p>
        </section>
        <div >
            <GoogleMapReact
                defaultCenter={{lat: 51.210111, lng: -0.516389}}
                defaultZoom={1}
            />
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



