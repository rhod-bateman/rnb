/**
 * Created by qtj929 on 20/12/2016.
 */
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './reset.css';
import Header from './Header'

const App = (structure) => (
<div>
    <Header></Header>
    <div>RSVP</div>
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
    structure: state
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({}, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
