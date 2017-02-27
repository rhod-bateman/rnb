/**
 * Created by qtj929 on 27/02/2017.
 */

import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './food.css';
import Segment from '../segment/Segment';
import Input from '../input/input'
import actionCreator from '../../actions/actionCreator';

const Food = ({structure}) => (
    <Segment title={structure.title}>
        <p>After the ceremony we will providing a picnic.</p>
        <p>In the evening there will be a hog roast.</p>
        <p>If you have any allergies we should know about please let us know.</p>
        <Input placeholder="I am allergic to..."></Input>
    </Segment>
);

const mapStateToProps = state => ({
    structure: state.segments.food
});

const mapDispatchToProps = dispatch => ({
    addSong: bindActionCreators(actionCreator.addSong, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Food);



