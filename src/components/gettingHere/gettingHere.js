/**
 * Created by qtj929 on 27/02/2017.
 */
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './gettingHere';
import Segment from '../segment/Segment';
import { gettingHere } from '../../data/text';

const BigDay = () => (
    <Segment title="Getting Here">
        <section>
            <p>Parking is limited but the house is a short taxi ride from Guildford station.</p>
            <p>Show your taxi driver this map so he can find us.</p>
        </section>
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



