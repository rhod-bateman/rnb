/**
 * Created by qtj929 on 27/02/2017.
 */
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './timetable.css';
import Segment from '../segment/Segment';
import {timetable} from '../../data/text';


const listItems = Object.keys(timetable.items).map((key) =>
    <li>{key}:{timetable.items[key]}</li>
);

const TimeTable = () => (
    <div>
        <h3 >{timetable.title}</h3>
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


