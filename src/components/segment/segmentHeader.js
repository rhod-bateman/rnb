/**
 * Created by qtj929 on 13/02/2017.
 */
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './segment.css';
import Header from '../Header'

const App = (segments) => (
    <div>
        <Header></Header>
        <Segment struture={segments.rsvp}></Segment>
        <div>Ceremony time and location</div>
        <div>Timetable</div>
        <div>Dress code</div>
        <div>Gift details</div>
        <div>table plan</div>
        <div>Song selection</div>
        <div>Food/allergies</div>
        <div>Transport and travel</div>
        <div>Where to stay</div>
    </div>
);

const mapStateToProps = state => ({
    segments: state.segments
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({}, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
