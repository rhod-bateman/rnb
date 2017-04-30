/**
 * Created by qtj929 on 27/02/2017.
 */

import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './accomodation.css';
import Segment from '../segment/Segment';
import Input from '../input/input'
import actionCreator from '../../actions/actionCreator';
import {accomodation} from '../../data/text';

const Accomodation = ({}) => (
    <Segment title="Where can I stay?" name="accommodation">
        <p>Coming soon...</p>
    </Segment>
);

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    addSong: bindActionCreators(actionCreator.addSong, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Accomodation);



