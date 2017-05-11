/**
 * Created by qtj929 on 27/02/2017.
 */
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './timetable.css';
import Segment from '../segment/Segment';
import {timetable} from '../../data/data';


const listItems = Object.keys(timetable).map((key) =>
    <li>{key} - {timetable[key]}</li>
);

const TimeTable = () => (
    <div>
        <h3>Our plan for the day</h3>
        <ol>{ listItems }</ol>
    </div>
);

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({}, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TimeTable);



