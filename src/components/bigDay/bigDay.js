/**
 * Created by qtj929 on 27/02/2017.
 */
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './bigDay.css';
import Segment from '../segment/Segment';
import TimeTable from '../timetable/Timetable';
import {bigDay as text, dressCode, address} from '../../data/text';
import {googleMapsLink} from '../../data/data';

const BigDay = () => (
    <Segment title="The Big Day">
        <section>
            We will wed in the woods in Rhod's parents' garden followed by a picnic on the lawn.
        </section>
        <section>
            Come and join us at mid-day on July 15th at <a href={googleMapsLink} target="_blank" rel="nofollow noopener noreferrer">{address}</a>
        </section>
        <section>Dress Code: {dressCode}</section>
        <TimeTable></TimeTable>
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



