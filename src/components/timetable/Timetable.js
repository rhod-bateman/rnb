/**
 * Created by qtj929 on 27/02/2017.
 */
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './timetable.css';
import Segment from '../segment/Segment';

const TimeTable = ({structure}) => (
    <Segment title={structure.title}>
        <ol>
            <li>12:00 start</li>
        </ol>
    </Segment>
);

const mapStateToProps = state => ({
    structure: state.segments.timetable
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({}, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TimeTable);



