/**
 * Created by qtj929 on 27/02/2017.
 */
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './bigDay.css';
import Segment from '../segment/Segment';
import Map from './Map'
import TimeTable from '../timetable/Timetable';
import {bigDay as text, dressCode} from '../../data/text';

const BigDay = () => (
    <Segment title={text.title}>
        <p>{text.intro}</p>
        <p>{text.invite}</p>
        <p>Dress Code: {dressCode}</p>
        <Map></Map>
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



