/**
 * Created by qtj929 on 27/02/2017.
 */
/**
 * Created by qtj929 on 20/12/2016.
 */
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './rsvp.css';
import Segment from '../segment/Segment';
import {rsvp} from '../../data/text';

const Rsvp = ({structure}) => (
    <Segment title={rsvp.title}>
        <p>{rsvp.intro}</p>
        <p>{rsvp.poison}</p>
        <p>{rsvp.poison2}</p>
        <p>{rsvp.kids1}</p>
        <p>{rsvp.kids2}</p>
        <p>{rsvp.kids3}</p>
    </Segment>
);

const mapStateToProps = state => ({
    structure: state.segments.rsvp,
    code: "123",
    names: "names go here",
    option:"yes"
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({}, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Rsvp);



