/**
 * Created by qtj929 on 27/02/2017.
 */
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './gettingHere';
import Segment from '../segment/Segment';
import TimeTable from '../timetable/Timetable';
import { gettingHere } from '../../data/text';

const BigDay = () => (
    <Segment title={gettingHere.title}>
        <p>{gettingHere.intro}</p>
        <p>{gettingHere.taxi}</p>
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



